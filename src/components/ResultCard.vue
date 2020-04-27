<template>
  <div class="card">
    <img :src="imageUrl" />
    <span> {{ commonName }}</span>
    <span> {{ latinName }}</span>
    <span> {{ water }}</span>
    <span> {{ shade }}</span>
    <span> {{ sun }}</span>
  </div>
</template>

<script>
import { useDeconstructAttrs } from '@/use/decontructAttrs.ts'
export default {
  name: 'ResultCard',
  props: { plant: { type: Object, default: () => ({}) } },
  setup(props) {
    return { ...useDeconstructAttrs(props.plant) }
  },
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  max-width: 200px;
  border: 1px solid black;
  border-radius: 2px;
  margin-bottom: 10px;
}
</style>
