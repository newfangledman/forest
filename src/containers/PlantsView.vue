<template>
  <div>
    <search-bar></search-bar>
    plants view
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
export default {
  name: "PlantsView",
  components: {
    [SearchBar.name]: SearchBar
  }
};
</script>

<style lang="scss" scoped></style>
