<template>
  <div>
    <search-bar></search-bar>
    {{ searchInput }}
    <pre>{{ searchResult }}</pre>
  </div>
</template>

<script>
import useSearchByCommonName from '@/use/searchByCommonName'
import SearchBar from '@/components/SearchBar'
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
  },
}
</script>

<style lang="scss" scoped></style>
