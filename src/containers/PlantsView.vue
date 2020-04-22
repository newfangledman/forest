<template>
  <div>
    <search-bar :toSearch="data"></search-bar>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import data from "./data.fixture";
export default {
  name: "PlantsView",
  components: {
    [SearchBar.name]: SearchBar
  },
  setup() {
    return { data };
  }
};
</script>

<style lang="scss" scoped></style>
