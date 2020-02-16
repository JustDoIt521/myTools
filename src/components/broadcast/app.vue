<template>
    <div class="mt-broadcast">
        <transition name="buttonOn">
            <p class="line" v-if="showValue" key="bOn">
                {{nowValue}}
            </p>
            <p class="line" v-else key="bOff">
                {{nextValue}}
            </p>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'mtbroadcast',
    props: {
        // 数组列表
        list: {
            type: Array,
            required: true,
            default: function() {
                return []
            }
        },
        // 展示时间间隔
        duration: {
            type: Number,
            default: 1000
        },
        // 对象数组键值
        keyValue: {
            type: String,
            default: ''
        }
    },
    watch: {
        list () {
            this.nowValue = this.keyValue ? this.list[0][this.keyValue] : this.list[0];
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
                this.nextValue =  this.keyValue ? this.list[this.next][this.keyValue] : this.list[this.next];
            } else {
                this.bowValue =  this.keyValue ? this.list[this.next][this.keyValue] : this.list[this.next];
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
    .line {
        position: absolute;
        top: 50%;
        
        width: 100%;

        line-height: 1;
        white-space: nowrap;
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