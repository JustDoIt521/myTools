<template>
    <div class="mt-broadcast">
        <transition name="buttonOn">
            <p v-if="showValue" key="bOn">
                {{nowValue}}
            </p>
            <p v-else key="bOff">
                {{nextValue}}
            </p>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'mtbroadcast',
    props: {
        list: {
            type: Array,
            required: true,
            default: function() {
                return []
            }
        },
        duration: {
            type: Number,
            default: 1000
        }
    },
    watch: {
        list () {
            this.nowValue = this.list[0].name;
            this.next++;
            this.timeout();
        }
    },
    data () {
        return {
            showValue: true,
            nowValue: '',
            nextValue: '',
            next: 0,
            timeoutObj: null
        }
    },
    methods: {
        timeout () {
            if (this.timeoutObj) {
                clearTimeout(this.timeoutObj);
            }
            this.timeoutObj = setTimeout(() => {
                this.changeValue();
                this.timeout();
            }, this.duration);
        },

        changeValue () {
            // 循环轮播
            if (this.next === this.list.length) {
                this.next = 0;
            }
            if (this.showValue) {
                this.nextValue = this.list[this.next].name;
            } else {
                this.nowValue = this.list[this.next].name;
            }
            this.showValue = !this.showValue;
            this.next++;
        }
    }
}
</script>
<style scoped lang="scss">
.mt-broadcast {
    position: relative;
    text-align: center;
    p {
        position: absolute;
        top: 50%;
        
        line-height: 1;
        // transform: translate(0%, -50%);

        width: 100%;
    }
    .buttonOn-enter-active, .buttonOn-leave-active {
        transition: all 1s ease;

    }
    .buttonOn-enter, .buttonOn-leave-to {
        opacity: 0;
    }
    .buttonOn-leave-to {
        transform:translateY(-100%);
    }
    .buttonOn-enter {
        transform:translateY(100%);
    }
}
</style>