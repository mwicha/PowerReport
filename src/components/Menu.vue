<template>
  <div id="content">
    <div class="wrap clearFix">
      <h2>{{ reports.header }}</h2>
      <div class="clearFix" v-for="report in reports.reports" :key="`menu_${report.reportValue}`">
        <div class="col floatLeft">
          <h3>
            <a :href="`/oneReport?section=${section}&report=${report.reportValue}`" :to="`/oneReport?section=${section}&report=${report.reportValue}`">
              {{ report.reportText }}
            </a>
          </h3>
          <p>
            {{ report.reportDesc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import services from '@/services'

export default {
  data () {
    return {
      section: '',
      reports: {}
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.section = this.$route.query.section
      services.getReportBySection(this.section).then(result => {
        this.reports = result.data
      })
    }
  }
}
</script>

<style scoped>

</style>
