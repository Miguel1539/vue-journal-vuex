<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <!-- h1 hola mundo -->
    <h1>Hola mundo desde Vue.js!</h1>
    <!-- 3 botones -->
    <button @click="goToDayBook" class="btn btn-primary">primary</button>
    <button @click="goToDayBook" class="btn btn-secondary">secondary</button>
    <button @click="goToDayBook" class="btn btn-success">success</button>


  </div>
</template>

<script>
export default {
  methods: {
    goToDayBook() {
      this.$router.push({
        name: 'no-entry'
      });
    }
  }
}
</script>

