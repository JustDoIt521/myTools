<template>
  <div id="app">
    <button @click="testRun">changeLoading</button>

    <!-- <mt-progress :progress="process"></mt-progress> -->

    <test-progress :progress="process"></test-progress>

  </div>
</template>
<script>
import testProgress from '@/components/progress/testApp.vue';
// import MTProgress from '@/components/progress/app.vue';
export default {
  components: {
    // 'mt-progress': MTProgress,
    'test-progress': testProgress
  },
  data () {
    return {
      dloading: false,
      process: 0
    }
  },
  methods: {
    testRun () {
      this.process = 0;
      this.test()
    },
    test () {
      if (this.process >= 100) {
        return
      } else {
        this.process = this.process + 5;
        setTimeout(() => {
         this.test()
        }, 100)
      }
    },

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
