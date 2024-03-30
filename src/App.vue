<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <Header></Header>
    <div class="container-fluid flex-grow-1 mb-3">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
  body, #app {
    padding-top: 100px;
  }
</style>