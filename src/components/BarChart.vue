<template>
    <div>
        <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
    </div>
</template>

<script>
export default {
    props: ['propsdata'],
    mounted() {
        // DOM에 접근할 때, 각 컴포넌트 내 태그에만 접근 가능한 ref 속성을 사용하는 것이 충돌 위험에서 안전하다.
        var ctx = this.$refs.barChart;

        var myChart = new this.$_Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: this.propsdata,
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}
</script>

<style>

</style>
