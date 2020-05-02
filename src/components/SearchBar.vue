<template>
  <input type="text" v-model="searchInput" />
</template>

<script>
import useSearchByCommonName from '@/use/searchByCommonName'
export default {
  name: 'SearchBar',
  setup() {
    const { searchInput } = useSearchByCommonName()
    return {
      searchInput,
    }
  },
}
</script>

<style lang="scss" scoped></style>
