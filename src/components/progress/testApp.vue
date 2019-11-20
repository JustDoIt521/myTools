<template>
    <div class="canvasTest" >
        <canvas id="canvas" :width="width" :height="height"></canvas>
        <span style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);">{{progressing}}%</span>
    </div>
</template>
<script>
export default {
    name: 'canvasTest',
    data () {
        return {
            ctx: null,
            ctxObj: {
                begin: -Math.PI / 2,
                end: -Math.PI / 2
            },
            width: 200,
            height: 200,
            r: 0
        }
    },
    props: {
        progress: {
            type: Number,
            default: 0
        },

        radius: {
            type: Number,
            default: -1
        },

        defaultColor: {
            type: String,
            default: '#1E90FF'
        },

        progressColor: {
            type: String,
            default: '#DCDCDC'
        },

        lineWidth: {
            type: Number,
            default: 15
        }
    },
    computed: {
        progressing () {
            this.runing(this.progress)
            return this.progress
        }
    },
    mounted() {
        // console.warn(window.getComputedStyle(this.$el, null).width)
        // console.warn(parseInt(style.width));
        // console.warn(parseInt(style.height));
        let style = window.getComputedStyle(this.$el, null);
        this.width = parseInt(style.width);
        this.height = parseInt(style.height);
         if (this.radius === -1) {
            this.r = (this.width < this.height ? this.width / 2 : this.height / 2) - this.lineWidth;
        }
        this.$nextTick(() => {
            this.ctx = this.$el.childNodes[0].getContext('2d');
            this.ctx.beginPath();
            this.ctx.arc(this.width / 2, this.height / 2, this.r, 0, Math.PI * 2, false); // 绘制
            this.ctx.strokeStyle = this.defaultColor;
            this.ctx.lineWidth = this.lineWidth;
            this.ctx.stroke();
        })
    },
    methods: {
        runing (percent) {
            if (!this.ctx) return;
            this.ctx.beginPath();
            this.ctxObj.begin = this.ctxObj.end;
            this.ctxObj.end = Math.PI * (percent - 25) / 50;
            this.ctx.arc(this.width / 2, this.height / 2, this.r, this.ctxObj.begin, this.ctxObj.end, false);
            this.ctx.strokeStyle = this.progressColor;
            this.ctx.lineWidth = this.lineWidth;
            this.ctx.stroke();
        }
    }
}
</script>
<style lang="scss" scoped>
.canvasTest {
    width: 100%;
    height: 100%;
    outline: 1px solid #333;

    position: relative;
}
</style>