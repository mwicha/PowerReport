<template>
  <canvas ref="chart"></canvas>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'app',
  data () {
    return {
      chart: {},
      myChart: {}
    }
  },
  props: {
    type: '',
    datas: [],
    labels: []
  },
  mounted () {
    this.chart = this.$refs.chart
    this.myChart = new Chart(this.chart, {
      type: this.type,
      data: {
        labels: this.labels,
        datasets: [{
          label: '# of Votes',
          data: this.datas,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ]
        }]
      }
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#content {
  margin: auto;
  width: 1024px;
  background-color: #FFFFFF;
  padding: 20px;
}
</style>
