<template>
  <div>{{ query }}</div>
</template>

<script>
import useSearch from "@/use/search";
export default {
  name: "SearchBar",
  props: {
    searchOnAttribute: { type: String, default: "commonName" },
    query: { type: String, default: "" },
    toSearch: { type: Array, default: () => [] }
  },
  setup(props) {
    return { ...useSearch(props) };
  }
};
</script>

<style lang="scss" scoped></style>
