<template>
  <div id="app">
    <button @click="changeStatus">changeLoading</button>
    <div v-pianoLoading="dloading"
      style="width: 300px;height:100px; position: relative; background-color: #333;">
    </div>
    <!-- <piano-loading></piano-loading> -->
    <!-- <div v-dloading="dloading" class="temp">
      333333
    </div>
    <div v-loading="dloading"
      style="width: 50px;height: 20px; position: relative; background-color: #333;">
    </div> -->
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
  .temp {
    width: 100px;
    height: 50px;
    outline: 1px solid #333;
  }
}
</style>
