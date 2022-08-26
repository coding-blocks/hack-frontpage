<template>
  <div class="d-flex flex-col p-5">
    <h3 class="mb-4">Login / Signup</h3>
    <div>
      <button class="button-dashed button-orange mr-2" @click="loginGoogle"><i class="fab fa-google fa-lg px-2 pr-4"></i>Login with Google</button>
      <button class="button-dashed button-orange" @click="loginFacebook"><i class="fab fa-facebook fa-lg px-2 pr-4"></i>Login with Facebook</button>
    </div>
  </div>
</template>

<script>
import config from '~/config.js'

export default {
  methods: {
    loginGoogle() {
      const redirectUri = window.location.href
      const url = config.ONEAUTH_URL
      window.location.href = `${url}/login/google/v2?redirect_uri=${redirectUri}&client=online-codingblocks&client_id=${config.ONEAUTH_CLIENT_ID}`
    },
    loginFacebook() {
      const redirectUri = window.location.href
      const url = config.ONEAUTH_URL
      window.location.href = `${url}/login/facebook/v2?redirect_uri=${redirectUri}&client=online-codingblocks&client_id=${config.ONEAUTH_CLIENT_ID}`
    }
  }
}
</script>