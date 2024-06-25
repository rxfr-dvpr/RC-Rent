<template>
  <Nav/>

  <Header/>
  
  <main class="main">
    <Loader/>
    
    <Rent/>

    <RentDashboard/>

    <Reviews/>

  </main>

  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue'
import Rent from '@/components/Rent.vue';
import Loader from '@/components/Loader.vue';
import Reviews from '@/components/Reviews.vue';
import RentDashboard from '@/components/RentDashboard.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home Page',
  components: {
    Nav,
    Header,
    Rent,
    Loader,
    Reviews,
    RentDashboard,
    Footer
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

@media (max-width: 992px) {
  .main {
    margin-top: 150px;
    row-gap: 80px;
  }
}

</style>