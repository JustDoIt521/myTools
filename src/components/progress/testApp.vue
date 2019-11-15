<template>
    <div class="canvasTest" >
        <canvas id="canvas" width="200" height="200"></canvas>
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
            }
        }
    },
    props: {
        progress: {
            type: Number,
            default: 0
        }
    },
    computed: {
        progressing () {
            this.runing(this.progress)
            return this.progress
        }
    },
    mounted() {
        this.ctx = this.$el.childNodes[0].getContext('2d');
        this.ctx.beginPath();
        this.ctx.arc(100, 100, 50, 0, Math.PI * 2, false); // 绘制
        this.ctx.strokeStyle = '#1E90FF';
        this.ctx.lineWidth = 15;
        this.ctx.stroke();
    },
    methods: {
        runing (percent) {
            if (!this.ctx) return;
            this.ctx.beginPath();
            this.ctxObj.begin = this.ctxObj.end;
            this.ctxObj.end = Math.PI * (percent - 25) / 50;
            this.ctx.arc(100, 100, 50, this.ctxObj.begin, this.ctxObj.end, false);
            // this.ctx.arc(100, 100, 50, -Math.PI / 2, this.ctxObj.end, false);            
            this.ctx.strokeStyle = `#DCDCDC`;
            this.ctx.lineWidth = 15;
            this.ctx.stroke();
        }
    }
}
</script>
<style lang="scss" scoped>
.canvasTest {
    width: 200px;
    height: 200px;
    outline: 1px solid #333;

    position: relative;
}
</style>