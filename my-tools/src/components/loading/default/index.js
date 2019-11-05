// import dloading from './loading.vue'
// const LoadingConstructor = Vue.extend(dloading);
// const instance = new LoadingConstructor();
export default {
    install (Vue) {
        // 声明dloading指令
        Vue.directive('dloading', {
            bind: function(el, bind) {
                console.warn('dloading初始化', el, bind)
            },

            inserted: function (el, bind) {
                console.warn('dloading插入',  el, bind);
            },

            update: function (el, bind) {
                // console.warn(instance);
                console.warn('更新',  el, bind);
            }
        })
    }
}