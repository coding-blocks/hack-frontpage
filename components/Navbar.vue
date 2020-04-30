<template>
  <div>
    <div class="a-hb p-0">
      <div class="d-flex px-5 py-4 justify-content-between align-items-center">
        <div class="d-md-none">
          <div class="hamburger-menu mr-3">
            <div
              class="ham-toggle"
              @click="openNavbar()"
            >
              <div class="hamburger">
                <span /> 
                <span /> 
                <span />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-10 col-12">
          <div class="row align-items-center">
            <div class="col-xl-2 col-3 px-lg-4 px-0">
              <img
                src="../images/hb_logo.png"
                alt="Logo"
              >
            </div>
            <div class="col-xl-10 col-9 dsp-none-md">
              <div class="d-flex align-items-center h-100">
                <div class="font-sm light px-3">
                  <a href="/app/"> Dashboard </a>
                </div>
                <div class="font-sm light px-3">
                  <a href="/app/dcb"> Daily Code Bytes</a>
                </div>
                <div class="font-sm light px-3">
                  <a href="/app/practice">Practice Problems</a>
                </div>
                <div class="font-sm light px-3">
                  <a href="/app/contests">Contests</a>
                </div>
                <div class="font-sm light px-3">
                  <a href="/app/competitions">Competitions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          class="button-solid button-orange dsp-none-sm white"
          href="/app/"
        >Get Started</a>
      </div>
    </div>
    <cb-navbar topalign="right" />
    <cb-mobile-navbar
      id="navbar"
      logo="https://minio.codingblocks.com/public/hb_logo.png"
    >
      <div 
        v-if="currentUser" 
        class="d-flex align-items-center my-4 pl-4"
      >
        <div class="img-ring s-50x50">
          <img 
            :src="currentUser.photo" 
            class="round img" 
            alt="ProfilePic"
          >
        </div>

        <div class="pl-4">
          <div class="extra-bold gradient-text font-mds">
            {{ currentUser.name }}
          </div>
          <a 
            :href="`/app/users/${currentUser.id}`" 
            class="bold orange"
          >
            View Profile
          </a>
        </div>
      </div>
    </cb-mobile-navbar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: "Navbar",
  computed: {
    ...mapGetters({
      currentUser: 'session/currentUser'
    })
  },
  methods: {
    openNavbar() {
      const navbar = document.getElementById("navbar")
      navbar.showhamburger = true
    }
  }
}
</script>
