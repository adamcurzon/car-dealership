<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <SideMenu />
  <div id="page-container">
    <TopBar />
    <router-view></router-view>
  </div>
</template>

<script>
import SideMenu from './components/view/includes/SideMenu.vue';
import TopBar from './components/view/includes/TopBar.vue';
export default {
  name: "App",
  components: { SideMenu, TopBar }
}
</script>

<style>
@import './assets/css/global.css';
@import 'primeicons/primeicons.css';
</style>
