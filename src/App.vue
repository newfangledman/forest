<template>
  <div id="app">
    <plants-view></plants-view>
  </div>
</template>

<script>
import PlantsView from '@/containers/PlantsView'
import { provide } from 'vue'
import { store } from '@/store'
export default {
  setup() {
    provide(Symbol.for('PlantStore'), store)
  },
  name: 'App',
  components: {
    [PlantsView.name]: PlantsView,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
