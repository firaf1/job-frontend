<template>
  <div v-if="loading" class="loading-page">
    <p>Loading...</p>
  </div>
</template>
<script>
  export default {
    data: () => ({
      
      loading: false
    }),
    methods: {
      start() {
        console.log('starting......')
        this.loading = true
      },
      finish() {
        console.log('finishing.....')
        this.loading = false
      }
    }
  }
</script>
<style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: yellowgreen;
    text-align: center;
    padding-top: 100px;
    color: red;
    font-size: 80px;
    font-family: sans-serif;
  }
</style>