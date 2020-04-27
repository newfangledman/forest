<template>
  <div>
    <search-bar></search-bar>
    {{ searchInput }}
    <section class="plants-view">
      <div v-for="plant in searchResult" :key="plant.id">
        <result-card :plant="plant"></result-card>
      </div>
    </section>
  </div>
</template>

<script>
import useSearchByCommonName from '@/use/searchByCommonName'
import SearchBar from '@/components/SearchBar'
import ResultCard from '@/components/ResultCard'
import { store } from '@/store'
export default {
  setup() {
    const { searchInput } = useSearchByCommonName()
    const { searchResult } = store
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

<style lang="scss" scoped>
.plants-view {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
</style>
