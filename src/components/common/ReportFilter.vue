<template>
  <span>
    <div>
      <span v-for="filter in filters" :key="`filter_${filter.filterName}`">
        <Span v-if="filter.filterType === 'selectOption'">
          {{filter.filterName}} <span v-if="filter.isMandatory">*</span>
          <select v-model="filter.filterValue" :key="`options_${filter.filterName}`">
            <option v-for="option in filter.filterItems" :key="`option_${option.value}`" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </Span>
        <Span v-else-if="filter.filterType === 'selectTextInput'">
          {{filter.filterName}} <span v-if="filter.isMandatory">*</span>
          <input v-model="filter.filterValue" :key="`textInput_${filter.filterName}`" />
        </Span>
        <Span v-else-if="filter.filterType === 'selectNumberInput'">
          {{filter.filterName}} <span v-if="filter.isMandatory">*</span>
          <input v-model="filter.filterValue" type="number" :key="`numberInput_${filter.filterName}`" />
        </Span>
      </span>
    </div>
    <div>
      <button @click="search" :disabled="notComplete">Search</button>
    </div>
  </span>
</template>

<script>
export default {
  props: {
    filters: Array
  },
  methods: {
    search () {
      this.$emit('search', this.filters)
    }
  },
  computed: {
    notComplete () {
      let notComplete = false
      if (this.filters !== undefined) {
        this.filters.forEach(function (element) {
          if (element.isMandatory) {
            if (element.filterValue === null || element.filterValue === '' || element.filterValue === undefined) {
              notComplete = true
            }
          }
        })
      }
      return notComplete
    }
  }
}
</script>

<style>

</style>
