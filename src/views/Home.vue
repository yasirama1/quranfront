<template>
  <div class="home">
    <HomePage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    HomePage
  }
}
</script>
