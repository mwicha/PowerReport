<template>
  <div>
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
    'report-table': ReportTable
  }
}
</script>

<style scoped>

</style>
