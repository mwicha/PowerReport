<template>
  <span>
    {{table.tableName}}
    <table>
      <tr>
        <th v-for="header in table.headers" :key="`header_${header.value}`">{{header.text}}</th>
      </tr>
      <tr v-for="(r, index) in result" :key="`result_${index}`">
        <td v-for="header in table.headers" :key="`row_${header.value}`">{{r[header.value]}}</td>
      </tr>
    </table>
  </span>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  props: {
    table: Object,
    result: Array
  }
}
</script>

<style>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>
