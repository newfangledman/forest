<template>
  <div>
    <search-bar :toSearch="state.plants"></search-bar>
    {{ searchResult }}
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import { getState } from '@/store'
export default {
  setup() {
    const { state, getPlants, searchResult } = getState()
    return {
      state,
      getPlants,
      searchResult,
    }
  },
  name: 'PlantsView',
  components: {
    [SearchBar.name]: SearchBar,
  },
  created() {
    this.getPlants()
  },
}
</script>

<style lang="scss" scoped></style>
