<template>
  <div id="app">
    <header class="clearFix">
      <div class="wrap"> <a id="logo">Company A</a>
        <hr>
        <nav>
          <div id="nav"> <strong>Navigation</strong>
            <ul>
              <li v-for="menu in menus" :key="`menu_${menu.value}`">
                <a :href="`/menu?section=${menu.value}`" :to="`/menu?section=${menu.value}`">
                  {{ menu.text }}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <hr>
    <!-- / #intro -->
    <hr>
    <router-view />
    <footer class="clearFix">
      <div class="wrap clearFix">
        <p class="floatRight"> Copyright &copy; 2018 <a href="#">Company A</a> &ndash; All Rights Reserved<br>
          If you have any questions or concerns, please contact <a target="_blank" href="http://www.os-templates.com/">IT's Email</a></p>
      </div>
    </footer>
  </div>
</template>

<script>
import services from '@/services'

export default {
  name: 'App',
  data () {
    return {
      menus: [],
      section: 0
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      services.getMenu().then(result => {
        this.menus = result.data
      })
    }
  }
}
</script>

<style>

</style>
