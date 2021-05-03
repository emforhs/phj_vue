import VueRouter from 'vue-router'
const { isNavigationFailure, NavigationFailureType } = VueRouter

export default{
    install(Vue){
        Vue.prototype.$movePage = function (url){
          router.push(url);
        }
    }
}