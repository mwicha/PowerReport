<template>
  <div>
    <div>
      <Span>
        Section
        <select v-model="section">
          <option v-for="option in sections" :key="`section_${option.value}`" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </Span>
      <Span>
        Application
        <select v-model="application">
          <option v-for="option in applications" :key="`section_${option.value}`" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </Span>
      <Span>
        Report
        <select v-model="report">
          <option v-for="option in reports" :key="`section_${option.value}`" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </Span>
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

export default {
  data () {
    return {
      sections: [],
      section: '',
      applications: [],
      application: '',
      reports: [],
      report: '',
      resource: {},
      result: []
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      services.getSection().then(result => {
        this.sections = result.data
      })
    },
    selectedSection (value) {
      this.section = value
    },
    selectedApplication (value) {
      this.application = value
    },
    selectedReport (value) {
      this.report = value
    },
    search (val) {
      services.getResult(val).then(result => {
        this.result = result.data
      })
    }
  },
  watch: {
    section () {
      services.getApplication(this.section).then(result => {
        this.applications = result.data
      })
    },
    application () {
      services.getReport(this.application).then(result => {
        this.reports = result.data
      })
    },
    report () {
      services.getResource(this.report).then(result => {
        this.resource = result.data
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
