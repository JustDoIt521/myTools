<template>
  <div id="app">
    <div v-dloading="dloading"></div>
    <button @click="changeStatus">changeLoading</button>
    <!-- <router-view/> -->
    <div v-loading="dloading"
      style="width: 300px;height:300px; position: relative;">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dloading: false
    }
  },
  methods: {
    changeStatus () {
      this.dloading = !this.dloading;
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
