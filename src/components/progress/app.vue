<template>
    <div class="mt-progress" @click="startRun($event)">
            <div class="mt-progress-first"></div>
            <div class="mt-progress-second"></div>

            <div class="mt-progress-center">
                <span>{{`${progress}%`}}</span>
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
            progress: 0
        }
    },
    mounted () {
        console.warn(this.$el)
    },
    methods: {
        resetDom (dom, first, second) {
            dom.style.backgroundColor="#1E90FF";
            first.style.WebkitTransform = `rotate(0deg)`;
            first.style.zIndex = 2;
            second.style.WebkitTransform = `rotate(0deg)`;
            second.style.zIndex = 1;
            this.rotateIt(0, dom, first, second);
        },

        startRun (el) {
            console.warn(el)
            let dom = {}
            if (el.target.className === 'mt-progress') {
                dom = el.path[0]
            } else if (el.target.tagName === 'SPAN') {
                dom = el.path[2]
            } else {
                dom = el.path[1]
            }
            // return
            this.progress = 0;
            let [dfirst, dsecond] = dom.childNodes;
            this.resetDom(dom, dfirst, dsecond)
        },

        getEvent (el, index) {
            console.warn(el);
            console.warn(index);
        },

        rotateIt (percent, dom, first, second) {
            this.progress = percent;
            if (percent <= 50) {
                first.style.WebkitTransform = `rotate(${percent * 3.6}deg)`;
            } else {
                second.style.zIndex=3;
                second.style.WebkitTransform = `rotate(${percent * 3.6 - 180}deg)`;
                dom.style.backgroundColor = "#333";
            }
             if (percent >= 100) {
                 return
             } else {
                 percent = percent + 5;
             }
             setTimeout(() => {
                 this.rotateIt(percent, dom, first, second)
             }, 100);
        }
    }
}
</script>
<style lang="scss" scoped>
.mt-progress {
    width: 100px;
    height: 100px;
    border-radius: 50%;

    background-color: #1E90FF;
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
        z-index: 2;
        clip: rect(0, 100px, 100px, 50px);
        background-color:#1E90FF;
    }
    .mt-progress-second {
        z-index: 1;
        clip: rect(0px, 100px, 100px, 50px);
        background-color: #333;
    }
}
</style>