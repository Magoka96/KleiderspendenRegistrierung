<template>
  <Header></Header>
     <div class="container-fluid" style="margin-top: 80px;">
      <router-view/>
    </div>
</template>

<script>

import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>