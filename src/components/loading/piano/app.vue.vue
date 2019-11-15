<template>
    <div class="mt-piano-loading" v-show="isShow">
        <div class="mt-piano">
            <div v-for="piano in 5" :key="piano" :class="`mt-piano-key mt-piano-key-${piano}`">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'piano-loading',
    data () {
        return {
            isShow: false
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/components/scss/mixins.scss';
@import './style.scss';
</style>