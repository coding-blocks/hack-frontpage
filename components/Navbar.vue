<template>
  <div class="navbar">
    <div class="d-flex main align-items-center px-5">
      <a href="index.html" class="logo mr-auto"><img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/cblogo.webp" alt="Coding Blocks" class="img-fluid"></a>
    
      <nav class="nav-menu topheadnav">
        <ul>
          <li>
            <a href="#">
              <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconLearn.webp" alt="Learn">
            <span>Learn</span>
          </a>
        </li>
          <li class="active"><a href="https://hack.codingblocks.com">
            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconMonitor.webp" alt="Practice">
            <span>Practice</span></a></li>
          <li><a href="https://hire.codingblocks.com">
            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconHire.webp" alt="Hire">
            <span>Get Hired</span></a></li>
          <li><a href="https://ide.codingblocks.com">
            <img src="https://cb3img.s3.ap-south-1.amazonaws.com/img/iconIDE.webp" alt="IDE">
            <span>IDE</span></a></li>     
        </ul>
      </nav><!-- .nav-menu -->

      <button class="button-solid-orange" @click="toggleLoginDialog">Login / Signup</button>
      <button class="navbar-toggler" type="button">        
        <span class="bar"></span> 
      </button>
    </div>
    <div>
      <cb-navbar topalign="right" />
      <cb-mobile-navbar
        id="navbar"
        logo="https://minio.codingblocks.com/public/hb_logo.png"
      >
        <!-- <div 
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
        </div> -->
      </cb-mobile-navbar>
    </div>
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
    },
    toggleLoginDialog() {
      this.$emit('toggleShowLoginModal')
    }
  }
}
</script>
