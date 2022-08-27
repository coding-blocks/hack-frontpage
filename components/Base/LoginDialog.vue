<template>
  <div class="d-flex flex-col p-5">
    <h3 class="mb-4">Login / Signup</h3>
    <div>
      <button class="button-dashed button-orange mr-2" @click="loginGoogle"><i
          class="fab fa-google fa-lg px-2 pr-4"></i>Login with Google</button>
      <button class="button-dashed button-orange" @click="loginFacebook"><i
          class="fab fa-facebook fa-lg px-2 pr-4"></i>Login with Facebook</button>
    </div>
    <div class="my-5">OR</div>

    <div class="flex justify-content-center w-100" v-if="this.otp_id">
      <input class="input-text col-8" v-model="otp" placeholder="OTP" type="text" />
      <button class="button-solid button-orange" @click="verifyEmailOtpTask.run()"
        :disabled="verifyEmailOtpTask.isActive">Verify OTP</button>
    </div>
    <div class="flex justify-content-center w-100" v-else>
      <input class="input-text col-8" v-model="email" placeholder="Email" type="email" />
      <button class="button-solid button-orange" @click="sendEmailOtpTask.run()"
        :disabled="disableSendOtpButton || sendEmailOtpTask.isActive">Send OTP</button>
    </div>
    <div class="red my-4" v-if="error">{{error.message}}</div>
  </div>
</template>

<script>
import config from '~/config.js'

export default {
  data() {
    return {
      email: null,
      otp: null,
      otp_id: null,
      error: null
    }
  },
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
  },
  tasks(t) {
    return {
      sendEmailOtpTask: t(function* () {
        this.error = null
        try {
          const response = yield this.$axios.post('/jwt/otp', { email: this.email })
          this.otp_id = response.data.id
        } catch(err) {
          console.log(err)
        }
      }),
      verifyEmailOtpTask: t(function* () {
        this.error = null
        yield this.$axios.post('/jwt/otp/verify',
          {
            email: this.email,
            otp_id: this.otp_id,
            otp: this.otp
          }
        ).catch(({response}) => this.error = response.data)
      })
    }
  },
  computed: {
    disableSendOtpButton() {
      return !this.email
    }
  }
}
</script>