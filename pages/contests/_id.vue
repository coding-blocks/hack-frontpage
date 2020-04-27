<template>
  <div class="container">
    <img 
      :src="contest.image" 
      alt="Cover Photo"
      class="w-100"
    >
    <div class="border-card p-5 bg-black white br-none">
      <div class="row align-items-center justify-content-between">
        <div class="row no-gutters col-md-8 col-12 align-items-center">
          <div class="col-md-4 col-12 pr-2">
            <h3>{{ contest.name }}</h3>
          </div>
          <div class="col-12 col-md-8 my-lg-0 my-4">
            <ul class="divided-list my-0">
              <li class="pr-4">
                <div class="list-heading font-md extra-bold mb-2 orange">
                  {{ contest.stats['content-count'] }}
                </div>
                <div class="list-data font-mds">
                  Challenges
                </div>
              </li>
              <li class="px-4">
                <div class="list-heading font-md extra-bold mb-2 orange">
                  {{ startTime }}
                </div>
                <div class="list-data font-mds">
                  Starts
                </div>
              </li>
              <li class="pl-4">
                <div class="list-heading font-md extra-bold mb-2 orange">
                  {{ endTime }}
                </div>
                <div class="list-data font-mds">
                  Ends
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button class="button-solid button-orange font-sm extra-bold my-3">
            Start Challenge
          </button>
        </div>
      </div>
    </div>
    <div class="font-xs my-5">
      <div class="bold">
        Instructions
      </div>
      <p>{{ contest.description }}</p>
    </div>
  </div>
</template>
<script>
import moment from 'moment';

export default {
  async asyncData({ params, $axios, app, redirect }) {
    const res = await $axios.get(`/contests/${params.id}/details`)
    const contest = app.$jsonApiStore.sync(res.data)

    if (!contest['public-page']) {
      return redirect(`/app/contests/${params.id}`)
    }

    return {
      contest
    }
  },
  data: () => ({
    contest: {}
  }),
  computed: {
    startTime() {
      return moment(this.contest && this.contest['start-time']).format('D MMM h:mm A')
    },
    endTime() {
      return moment(this.contest && this.contest['end-time']).format('D MMM h:mm A')
    }
  }
}
</script>
