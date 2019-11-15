import piano from "./app.vue";

export default {
    install (Vue) {
        const pianoConstructor = Vue.extend(piano);
        const instance = new pianoConstructor();

        Vue.directive('pianoLoading', {
            bind: function() {
                console.warn('初始化')
            },

            inserted: function (el, bind) {
                el.className += ' mt-positive';
                el.appendChild(instance.$mount().$el);
                console.warn('pianoLoading插入',  el, bind);
            },

            update: function (el, bind) {
                instance.isShow = bind.value;
                console.warn('更新',  el, bind);
            }
        })
    }
}