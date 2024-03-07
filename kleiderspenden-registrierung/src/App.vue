<template>
  <Header></Header>
    <div class="container-fluid" style="margin-top: 120px;">
      <router-view/>
    </div>
  <Footer></Footer>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>