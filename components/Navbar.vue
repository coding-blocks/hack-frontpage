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
                  <a href=""> Dashboard </a>
                </div>
                <div class="font-sm light px-3">
                  <a href=""> Daily Code Bytes</a>
                </div>
                <div class="font-sm light px-3">
                  <a href="">Practice Problems</a>
                </div>
                <div class="font-sm light px-3">
                  <a href="">Contests</a>
                </div>
                <div class="font-sm light px-3">
                  <a href="">Competitions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          class="button-solid button-orange dsp-none-sm white"
          href=""
        >Get Started</a>
      </div>
    </div>
    <cb-navbar topalign="right" />
    <cb-mobile-navbar
      id="navbar"
      logo="/_nuxt/images/hb_logo.png"
    />
  </div>
</template>
<script>
export default {
  name: "Navbar",
  methods: {
    openNavbar() {
      const navbar = document.getElementById("navbar")
      navbar.showhamburger = true
    }
  }
}
</script>
