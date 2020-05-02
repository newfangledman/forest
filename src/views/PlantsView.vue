<template>
  <div id="plants-view-wrapper" class="grid">
    <header>
      <search-bar></search-bar>
    </header>
    <aside>
      Sidebar
    </aside>
    <main>
      <section>
        <result-card
          v-for="plant in searchResult"
          :key="plant.id"
          :plant="plant"
        ></result-card>
      </section>
    </main>
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
.grid {
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: 5vw 30vw 10vw;
  grid-gap: 1em;
}

header,
footer {
  grid-column: 1 / span 2;
}

header,
aside,
main,
footer {
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
}

section {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
</style>
