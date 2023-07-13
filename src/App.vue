<script setup>
import LoginPage from './components/view/LoginPage.vue';
</script>

<template>
  <title>Vue</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

  <SideMenu v-if="isJwtSet" />
  <div v-if="isJwtSet" id="page-container">
    <TopBar />
    <router-view></router-view>
  </div>
  <LoginPage v-if="!isJwtSet" />
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import SideMenu from './components/view/includes/SideMenu.vue';
import TopBar from './components/view/includes/TopBar.vue';
import jwt_decode from "jwt-decode";

export default {
  name: "App",
  components: { SideMenu, TopBar },
  mounted() {
    this.checkLogin();
  },
  methods: {
    ...mapGetters(['getUser', 'isJwtSet']),
    ...mapMutations(['setUser']),
    checkLogin() {
      if (this.isJwtSet()) {
        var decodedUser = jwt_decode(localStorage.getItem("jwt"));
        console.log(decodedUser);
        this.setUser(decodedUser);
      }
      return true;
    },
  }
}
</script>

<style>
@import './assets/css/global.css';
@import 'primeicons/primeicons.css';
</style>
