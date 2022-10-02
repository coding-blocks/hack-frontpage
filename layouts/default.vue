<template>
  <div class="a-hb">
    <promotion-banner />
    <cb-login-signup class="hide-cb-login-signup-prompt" />
    <Navbar @toggleShowLoginModal="toggleShowModal"/>
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import config from '~/config.js';
export default {
  data() {
    return {
      showModal: false
    }
  },
  components: {
    Navbar,
    Footer
  },
  head: {
    bodyAttrs: {
      class: 'pt-0'
    }
  },
  mounted() {
    if(process.client) {
      const redirectionPath = localStorage.getItem('redirectionPath')

      if(this.$store.state.session.user) {
        if(redirectionPath) {
          localStorage.removeItem('redirectionPath')
          window.location.href = redirectionPath
        } else {
          window.location = config.publicUrl + '/app/'
        }
      }

      const loginPrompt = localStorage.getItem('loginPrompt')
      if(loginPrompt === 'true') {
        document.getElementsByTagName('cb-login-signup')[0].classList.remove('hide-cb-login-signup-prompt')
      }
    }
  },
  methods: {
    toggleShowModal() {
      this.showModal = !this.showModal
      if(process.client && !this.showModal) {
        localStorage.setItem('loginPrompt', false)
      }
    }
  }
}
</script>
