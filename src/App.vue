<template>
  <div id="app">
    <button @click="changeStatus">changeLoading</button>

    <mt-progress></mt-progress>
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
import MTProgress from '@/components/progress/app.vue';
export default {
  components: {
    'mt-progress': MTProgress
  },
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
