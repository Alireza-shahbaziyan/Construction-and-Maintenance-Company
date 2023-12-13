<script setup>
import Footer from './components/Footer.vue';
import NavigationBar from './components/NavigationBar.vue';
import HomeView from './views/HomeView.vue';


</script>

<template >
  <div class="relative bg-slate-100">
    <NavigationBar />
    <div class="">
      <HomeView />
    </div>
    <Footer/>
  </div>
</template>
