<template>
  <Nav/>

  <Header/>
  
  <main class="main">
    <Rent/>
  </main>
</template>

<script>
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue'
import Rent from '@/components/Rent.vue';

export default {
  name: 'Home Page',
  components: {
    Nav,
    Header,
    Rent
  }
}

</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  margin-top: 180px;
}

</style>