<template>
  <Nav/>

  <Header/>
  
  <div class="text-box">
    <h1>RC-Rent Soon !</h1>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue'

export default {
  name: 'Home Page',
  components: {
    Nav,
    Header
  }
}

</script>

<style lang="scss" scoped>

.text-box {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    color: var(--main-yellow);
  }
}

</style>