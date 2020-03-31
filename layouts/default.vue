<template>
  <div class="a-hb">
    <promotion-banner />
    <Navbar />
    <nuxt />
    <Footer/>
  </div>
</template>
<script>
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  export default {
    components: {
      Navbar, Footer
    },
    head: {
      bodyAttrs: {
        class: 'pt-0'
      }
    }
  }
</script>
