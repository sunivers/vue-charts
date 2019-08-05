import Chart from 'chart.js';

export default {
    install(Vue) {
        // '$_' 프리픽스는 Vue.js 스타일가이드에서 권고하는 플러그인 접두사.
        Vue.prototype.$_Chart = Chart;
    }
}