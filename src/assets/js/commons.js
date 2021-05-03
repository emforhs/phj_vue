export default{
    install(Vue){
        Vue.prototype.$movePage = function (url){
          VueRouter.push(url);
        }
    }
}