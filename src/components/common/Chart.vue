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
    title: String,
    type: String,
    datas: Array,
    labels: Array,
    colors: Array
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
          backgroundColor: this.colors
        }]
      },
      options: {
        title: {
          display: true,
          text: this.title
        }
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
