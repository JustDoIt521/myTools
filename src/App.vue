<template>
  <div id="app">
    <div class="broadcast">
      <mt-broadcast :list="list" :duration="2000"></mt-broadcast>
    </div>
  </div>
</template>
<script>
import broadCast from '@/components/broadcast/app.vue';
export default {
  components: {
    'mt-broadcast': broadCast
  },
  data () {
    return {
      dloading: false,
      process: 0,
      list: []
    }
  },
  mounted () {
    for (let i = 0; i < 10; i++) {
      this.list.push({
        name: `name-${i}`
      })
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
  .broadcast {
    width: 100px;
    height: 50px;
    text-align: center;

    outline: 2px solid #1E90FF;
  }
}
</style>
