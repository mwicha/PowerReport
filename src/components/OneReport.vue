<template>
  <div>
    <div class="col floatLeft">
      <chart :title="'tset'" :type="'line'" :datas="[12, 19, 3, 5, 9, 3]" :labels="['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']" />
    </div>
    <div class="col floatLeft">
      <chart :title="'tset'" :type="'bar'" :datas="[12, 19, 3, 5, 9, 3]" :labels="['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']" :colors="['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']" />
    </div>
    <div class="col floatLeft">
      <chart :title="'tset'" :type="'radar'" :datas="[12, 19, 3, 5, 9, 3]" :labels="['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']" />
    </div>
    <div class="col floatLeft">
      <chart :title="'tset'" :type="'doughnut'" :datas="[12, 19, 3, 5, 9, 3]" :labels="['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']" :colors="['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']" />
    </div>
    <div class="col floatLeft">
      <chart :title="'tset'" :type="'pie'" :datas="[12, 19, 3, 5, 9, 3]" :labels="['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']" :colors="['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']" />
    </div>
    <div class="col floatLeft">
      <chart :title="'tset'" :type="'polarArea'" :datas="[12, 19, 3, 5, 9, 3]" :labels="['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']" :colors="['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']" />
    </div>
    <div class="col floatLeft">
      <chart :title="'tset'" :type="'bubble'" :datas="[{ x: 3, y: 3, r: 10 },{ x: 5, y: 5, r: 10 }]" :labels="['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']" :colors="['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']" />
    </div>
    <div v-if="report !== ''">
      <report-filters :filters="resource.filters" @search="search" />
    </div>
    <div v-if="result !== ''">
      <report-table :table="resource.table" :result="result" />
    </div>
  </div>
</template>

<script>
import services from '@/services'
import ReportFilter from '@/components/common/ReportFilter'
import ReportTable from '@/components/common/ReportTable'
import Chart from '@/components/common/Chart'

export default {
  data () {
    return {
      section: '',
      report: '',
      resource: {},
      result: []
    }
  },
  mounted () {
    this.section = this.$route.query.section
    this.report = this.$route.query.report
    this.fillData()
  },
  methods: {
    fillData () {
      services.getResource(this.section, this.report).then(result => {
        this.resource = result.data
      })
    },
    search (val) {
      services.getResult(val).then(result => {
        this.result = result.data
      })
    }
  },
  components: {
    'report-filters': ReportFilter,
    'report-table': ReportTable,
    'chart': Chart
  }
}
</script>

<style scoped>

</style>
