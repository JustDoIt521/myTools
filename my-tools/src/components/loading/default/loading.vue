<template>
    <div class="dloading" v-show="isShow">
        <div v-for="index in 8" :key="index" :class="`dloading-border-${index}`">
            <div class="dloading-item"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dloading',
    data () {
        return {
            isShow: true
        }
    }
}
</script>
<style lang="scss" scoped>
@import './style.scss'
</style>