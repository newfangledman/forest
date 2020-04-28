<template>
  <div id="app-container">
    <plants-view></plants-view>
  </div>
</template>

<script>
import PlantsView from '@/views/PlantsView'
export default {
  name: 'App',
  components: {
    [PlantsView.name]: PlantsView,
  },
}
</script>

<style lang="scss">
#app-container {
  display: grid;
}
</style>
