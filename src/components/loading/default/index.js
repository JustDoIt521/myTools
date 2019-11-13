import dloading from './loading.vue'

export default {
    install (Vue) {
        // 构造器 创建一个子类
        const LoadingConstructor = Vue.extend(dloading);
        // 初始化一个instance实例
        const instance = new LoadingConstructor();
        // 声明dloading指令
        Vue.directive('dloading', {
            bind: function(el, bind) {
                console.warn(instance)
                
                console.warn('dloading初始化', el, bind)
            },
            
            inserted: function (el, bind) {
                
                el.className += ' mt-positive';
                el.appendChild(instance.$mount().$el);
                console.warn('dloading插入',  el, bind);
            },

            update: function (el, bind) {
                instance.isShow = bind.value;
                console.warn('更新',  el, bind);
            }
        })
    }
}