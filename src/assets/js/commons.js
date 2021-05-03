import ApexCharts from 'apexcharts'

export default{
    install(Vue){
        Vue.prototype.$createChart = function (el, options){
          var chart = new ApexCharts(el, options);
          chart.render();
        }
        Vue.prototype.$updateChart = function (el, options){
          var chart = new ApexCharts(el, options);
          chart.updateOptions();
        }
        Vue.prototype.$deleteChart = function (el, options){
          var chart = new ApexCharts(el, options);
          chart.destroy();
        }
    }
}