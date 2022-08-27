<template>
  <div class="a-hb">
    <promotion-banner />
    <Modal v-if="showModal" @close="toggleShowModal">
      <div slot="body">
        <LoginDialog />
      </div>
    </Modal>
    <Navbar @toggleShowLoginModal="toggleShowModal"/>
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Modal from '~/components/Base/Modal.vue'
import LoginDialog from '~/components/Base/LoginDialog.vue'
export default {
  data() {
    return {
      showModal: false
    }
  },
  components: {
    Navbar,
    Footer,
    Modal,
    LoginDialog
  },
  head: {
    bodyAttrs: {
      class: 'pt-0'
    }
  },
  mounted() {
    if(process.client) {
      const redirectionPath = localStorage.getItem('redirectionPath')
      if(redirectionPath) {
        localStorage.removeItem('redirectionPath')
        window.location.href = redirectionPath
      }
      const loginPrompt = localStorage.getItem('loginPrompt')
      if(loginPrompt === 'true') {
        this.showModal = true
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
