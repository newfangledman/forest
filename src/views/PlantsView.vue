<template>
  <div id="plants-view-wrapper">
    <search-bar class="top"></search-bar>
    {{ searchInput }}
    <section class="main">
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
#plants-view-wrapper {
  display: grid;
  grid-template-rows: auto;
  grid-template-areas:
    '. top .'
    'main main main';
}
.top {
  grid-area: top;
  justify-self: center;
}
.main {
  margin-top: 10px;
  justify-self: center;
  grid-area: main;
}
</style>
