<template>
  <div id="app">
    
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      dloading: false,
      process: 0,
      list: []
    }
  },
  computed: {
    routes: function () {
      return this.$router.options.routes
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
