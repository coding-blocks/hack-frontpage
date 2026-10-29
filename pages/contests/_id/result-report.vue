<template>
  <div class="result-report">
    <div class="report-header">
      <div>
        <div class="breadcrumb">
          <nuxt-link :to="`/contests/${contest.id}`">
            Tests
          </nuxt-link>
          / {{ contest.name }}
        </div>
        <h1 class="title">
          {{ contest.name }}
        </h1>
        <div class="meta">
          <span>{{ startTime }}</span>
          <span v-if="durationMinutes">{{ durationMinutes }} minutes</span>
          <span>{{ contentPerformance.length }} sections · {{ totalMaxScore }} marks</span>
          <span
            v-if="isFinal"
            class="final"
          >Results final</span>
        </div>
      </div>
      <div
        v-if="!isFinal"
        class="live-badge"
      >
        <span class="live-dot" />
        LIVE PROGRESS TRACKING
      </div>
    </div>

    <div class="stats">
      <div class="stat-card">
        <div class="stat-label">
          REGISTERED
        </div>
        <div class="stat-value">
          {{ registeredStudents }}
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-label">
          ATTEMPTED THE TEST
        </div>
        <div class="stat-value">
          {{ attemptedStudents }}
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-label">
          COMPLETED THE TEST
        </div>
        <div class="stat-value">
          {{ completedTest }}
        </div>
      </div>
    </div>

    <h2 class="section-title">
      Section-wise performance
    </h2>
    <div class="sections">
      <div
        v-for="section in contentPerformance"
        :key="section.name"
        class="section-card"
      >
        <div class="section-name">
          {{ sectionLabel(section.name) }}
        </div>
        <div class="section-stats">
          <div>
            <div class="stat-label">
              Max marks
            </div>
            <div class="mono-value">
              {{ section.maxScore }}
            </div>
          </div>
          <div>
            <div class="stat-label">
              Highest
            </div>
            <div class="mono-value">
              {{ section.highestScore }}
            </div>
          </div>
          <div>
            <div class="stat-label">
              Average
            </div>
            <div class="mono-value">
              {{ section.avgScore }}
            </div>
          </div>
        </div>
        <div class="progress-row">
          <span>Average score</span>
          <span>{{ avgPercent(section) }}%</span>
        </div>
        <div class="progress">
          <div
            class="progress-fill"
            :class="{ low: avgPercent(section) < 50 }"
            :style="{ width: `${avgPercent(section)}%` }"
          />
        </div>
      </div>
    </div>

    <div class="results-card">
      <div class="results-header">
        <div>
          <h2 class="section-title m-0">
            Student results
          </h2>
          <div class="subtitle">
            Showing {{ filteredLeaderboard.length }} of {{ leaderboard.length }} students
          </div>
        </div>
        <div class="filters">
          <input
            v-model="search"
            class="search"
            type="text"
            placeholder="Search name or email..."
          >
          <button
            v-for="branch in branchFilters"
            :key="branch"
            class="chip"
            :class="{ active: selectedBranch === branch }"
            @click="selectedBranch = branch"
          >
            {{ branch }}
          </button>
        </div>
      </div>

      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Email</th>
              <th>Name</th>
              <th>Branch</th>
              <th
                v-for="section in contentPerformance"
                :key="section.name"
                class="num"
              >
                {{ sectionLabel(section.name) }} /{{ section.maxScore }}
              </th>
              <th class="num">
                Total /{{ totalMaxScore }}
              </th>
              <th class="num">
                Time
              </th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in filteredLeaderboard"
              :key="row.email"
            >
              <td class="mono">
                {{ row.rank }}
              </td>
              <td class="mono">
                {{ row.email }}
              </td>
              <td>{{ row.name }}</td>
              <td class="muted">
                {{ row.branch || '–' }}
              </td>
              <td
                v-for="section in contentPerformance"
                :key="section.name"
                class="num mono"
              >
                {{ userSectionScore(row, section.name) }}
              </td>
              <td class="num mono bold">
                {{ row.totalScore }}
              </td>
              <td class="num mono">
                {{ row.time || '–' }}
              </td>
              <td>
                <span
                  v-if="row.submit_status"
                  class="status"
                  :class="{ auto: row.submit_status === 'Auto-Submitted' }"
                >
                  {{ row.submit_status }}
                </span>
                <span
                  v-else
                  class="status pending"
                >In progress</span>
              </td>
            </tr>
            <tr v-if="!filteredLeaderboard.length">
              <td
                :colspan="contentPerformance.length + 7"
                class="empty"
              >
                No students found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  async asyncData({ params, $axios }) {
    const { data } = await $axios.get(`/contests/${params.id}/result-report`)
    return {
      ...data
    }
  },
  data: () => ({
    contest: {},
    registeredStudents: 0,
    attemptedStudents: 0,
    completedTest: 0,
    contentPerformance: [],
    leaderboard: [],
    search: '',
    selectedBranch: 'All'
  }),
  computed: {
    startTime() {
      return moment(this.contest.start_time).format('D MMM YYYY · h:mm A')
    },
    durationMinutes() {
      return this.contest.duration ? Math.round(this.contest.duration / 60) : null
    },
    isFinal() {
      return moment().isAfter(this.contest.end_time)
    },
    totalMaxScore() {
      return this.contentPerformance.reduce((acc, section) => acc + section.maxScore, 0)
    },
    branchFilters() {
      const branches = new Set(this.leaderboard.map(row => row.branch).filter(Boolean))
      return ['All', ...branches]
    },
    filteredLeaderboard() {
      const search = this.search.trim().toLowerCase()
      return this.leaderboard.filter(row => {
        if (this.selectedBranch !== 'All' && row.branch !== this.selectedBranch) {
          return false
        }
        if (!search) {
          return true
        }
        return (row.name || '').toLowerCase().includes(search) ||
          (row.email || '').toLowerCase().includes(search)
      })
    }
  },
  methods: {
    sectionLabel(name) {
      return name === 'technicalAndCoding' ? 'Technical and coding' : name
    },
    avgPercent(section) {
      if (!section.maxScore) {
        return 0
      }
      return +((section.avgScore / section.maxScore) * 100).toFixed(1)
    },
    userSectionScore(row, name) {
      const content = (row.contentScores || []).find(c => c.name === name)
      return content ? content.score : '–'
    }
  },
  head() {
    return {
      title: `${this.contest.name || 'Contest'} - Result Report`
    }
  }
}
</script>
<style scoped>
.result-report {
  background: #f3f5f9;
  color: #15171e;
  padding: 32px 48px 64px;
  min-height: 100vh;
}

.report-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 24px;
}

.breadcrumb {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 8px;
}

.breadcrumb a {
  color: #3b5bdb;
}

.title {
  font-size: 30px;
  font-weight: 800;
  margin: 0 0 8px;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 13px;
  color: #6b7280;
}

.meta .final {
  color: #1f9d55;
  font-weight: 700;
}

.live-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #e5e7eb;
  border-radius: 999px;
  padding: 10px 20px;
  font-size: 15px;
  white-space: nowrap;
}

.live-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #dc2626;
}

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;
}

.stat-card,
.section-card,
.results-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

.stat-card {
  min-width: 180px;
  padding: 20px;
}

.stat-label {
  font-size: 11px;
  color: #6b7280;
  margin-bottom: 6px;
}

.stat-value,
.mono-value,
.mono {
  font-family: 'SFMono-Regular', Menlo, Consolas, monospace;
}

.stat-value {
  font-size: 28px;
  font-weight: 700;
}

.section-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 16px;
}

.m-0 {
  margin: 0;
}

.sections {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.section-card {
  padding: 20px;
}

.section-name {
  font-weight: 700;
  margin-bottom: 12px;
}

.section-stats {
  display: flex;
  gap: 28px;
  margin-bottom: 16px;
}

.mono-value {
  font-size: 20px;
  font-weight: 700;
}

.progress-row {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 6px;
}

.progress {
  height: 6px;
  background: #e5e7eb;
  border-radius: 999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #2b44b8;
  border-radius: 999px;
}

.progress-fill.low {
  background: #f59e0b;
}

.results-card {
  padding: 24px;
}

.results-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}

.subtitle {
  font-size: 13px;
  color: #6b7280;
  margin-top: 4px;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.search {
  width: 260px;
  max-width: 100%;
  padding: 10px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
}

.chip {
  padding: 8px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
}

.chip.active {
  border-color: #3b5bdb;
  background: #eef2ff;
  color: #3b5bdb;
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

th {
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  color: #6b7280;
  padding: 10px 8px;
  border-bottom: 1px solid #e5e7eb;
  white-space: nowrap;
}

td {
  padding: 14px 8px;
  border-bottom: 1px solid #f0f1f4;
  white-space: nowrap;
}

.num {
  text-align: right;
}

.bold {
  font-weight: 700;
}

.muted {
  color: #6b7280;
}

.status {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  background: #e8f7ee;
  color: #1f9d55;
}

.status.auto {
  background: #fff4e5;
  color: #d97706;
}

.status.pending {
  background: #f0f1f4;
  color: #6b7280;
}

.empty {
  text-align: center;
  color: #6b7280;
}

@media (max-width: 768px) {
  .result-report {
    padding: 16px;
  }

  .report-header {
    flex-direction: column;
  }
}
</style>
