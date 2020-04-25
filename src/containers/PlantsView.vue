<template>
  <div>
    <search-bar></search-bar>
    {{ searchInput }}
    <div v-for="plant in searchResult" :key="plant.id">
      <result-card v-bind="plant"></result-card>
    </div>
  </div>
</template>

<script>
import useSearchByCommonName from '@/use/searchByCommonName'
import SearchBar from '@/components/SearchBar'
import ResultCard from '@/components/ResultCard'
import { getState } from '@/store'
export default {
  setup() {
    const { searchInput } = useSearchByCommonName()
    const { searchResult } = getState()
    return {
      searchInput,
      searchResult,
    }
  },
  name: 'PlantsView',
  components: {
    [SearchBar.name]: SearchBar,
    [ResultCard.name]: ResultCard,
  },
}
</script>

<style lang="scss" scoped></style>
