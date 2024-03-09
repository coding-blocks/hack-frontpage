<template>
  <div>
    <div id="g_id_onload"
       data-client_id="17928091484-k5aqk9hr1orcoqj0373nqdfft91ncfsf.apps.googleusercontent.com"
       data-auto_prompt="true"
       data-redirect_to="https://hack.codingblocks.com?flow=login"
       data-client_name="hackerblocks-codingblocks"
       data-oneauth_client_id="2146237097"
       data-login_uri="https://account.codingblocks.com/login/google/onetap-signin-callback">
    </div>
    <LandingPage />
  </div>
</template>

<script>
import LandingPage from "../components/Index/LandingPage";
export default {
  components: {
    LandingPage,
  },
};
</script>
