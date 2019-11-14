<template>
    <div class="mt-dloading" v-show="isShow">
        <div class="mt-dloading-position">
            <div v-for="index in 8" :key="index" :class="`mt-dloading-border-${index}`">
                <div class="mt-dloading-item"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dloading',
    data () {
        return {
            isShow: false
        }
    }
}
</script>
<style lang="scss" scoped>
@import './style.scss';
</style>