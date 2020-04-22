<template>
  <div>
    <input type="text" v-model="searchInput" />
    <pre>{{ results }}</pre>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import useSearch from "@/use/search";
export default {
  name: "SearchBar",
  props: {
    searchOnAttribute: { type: String, default: "commonname" },
    toSearch: { type: Array, default: () => [] }
  },
  setup(props) {
    const searchInput = ref("");
    const results = useSearch({ ...props, query: searchInput });
    return { searchInput, results };
  }
};
</script>

<style lang="scss" scoped></style>
