<template>
    <div class="mt-progress" @click="startRun($event)">
            <div class="mt-progress-first"></div>
            <div class="mt-progress-second"></div>

            <div class="mt-progress-center">
                <span>{{`${progressing}%`}}</span>
            </div>
    </div>
</template>
<script>
export default {
    /*
        实现思路
        两个绝对定位的半圆相互重合再右侧first second
        first z-index 2
        second z-index 1
        first的颜色是未加载颜色
        second的颜色是已加载颜色
        在前百分之五十的时候 转动first,将second慢慢的露出来，模拟进度条加载的过程

        当过百分之五十的时候 设置
        first z-index 1
        second z-index 2
        转动second的角度模拟进度条加载过程，
        此时要注意， second顺时针转动时背景色会显现出来 
         因为背景色之前是未加载色，所以需要将背景色设置为已加载的颜色
    */

    name: 'mtprogress',
    data () {
        return {
            dom: null,
            first: null,
            second: null
        }
    },

    props: {
        waitColor: {
            type: String,
            default: '#333'
        },
        startColor: {
            type: String,
            default: '#1E90FF'
        },
        endColor: {
            type: String,
            default: 'green'
        },
        progress: {
            type: Number,
            default: 0
        }
    },
    computed: {
        progressing () {
            this.rotate(this.progress)
            return this.progress
        }
    },

    mounted () {
        this.dom = this.$el;
        this.first = this.$el.childNodes[0];
        this.second = this.$el.childNodes[1];
        this.origin();
    },
    methods: {
        origin () {
            this.dom.style = `background-color: ${this.waitColor}`;
            this.first.style = `background-color: ${this.waitColor}; z-index: 2; transform: rotate(0deg);`;
            this.second.style = `background-color: ${this.startColor}; z-index: 1; transform: rotate(0deg);`;
        },

        rotate (percent) {
            if (this.dom && this.first && this.second) {
               if (percent <= 50) {
                    this.first.style.WebkitTransform = `rotate(${percent * 3.6}deg)`;
                } else {
                    this.second.style.zIndex = 3;
                    this.second.style.WebkitTransform = `rotate(${percent * 3.6 - 180}deg)`;
                    this.dom.style = `background-color: ${this.startColor};`;
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.mt-progress {
    width: 100px;
    height: 100px;
    border-radius: 50%;

    position: relative;
    .mt-click {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 12;
    }
    .mt-progress-center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;

        width: 80px;
        height: 80px;
        border-radius: 50%;

        background-color: #fff;
        span {
            line-height: 80px;
            font-size: 1.5em;
            font-weight: 600;
        }
    }

    .mt-progress-first, .mt-progress-second {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: transform .05s;
        
        border-radius: 50%;

    }
    .mt-progress-first {
        clip: rect(0, 100px, 100px, 50px);
    }
    .mt-progress-second {
        clip: rect(0px, 100px, 100px, 50px);
    }
}
</style>