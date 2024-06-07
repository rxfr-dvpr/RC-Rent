<template>
  <Nav/>

  <Header/>
  
  <main class="main">
    <Loader/>
    
    <Rent/>

    <RentDashboard/>

    <Reviews/>

  </main>
</template>

<script>
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue'
import Rent from '@/components/Rent.vue';
import Loader from '@/components/Loader.vue';
import Reviews from '@/components/Reviews.vue';
import RentDashboard from '@/components/RentDashboard.vue';

export default {
  name: 'Home Page',
  components: {
    Nav,
    Header,
    Rent,
    Loader,
    Reviews,
    RentDashboard
  }
}

</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 180px;
  row-gap: 140px;
}

</style>