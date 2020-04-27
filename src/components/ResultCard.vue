<template>
  <div class="card">
    <span> {{ commonName }}</span>
    <span> {{ latinName }}</span>
    <span> {{ water }}</span>
    <span> {{ shade }}</span>
    <span> {{ sun }}</span>
    <img :src="imageUrl" />
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
}
</style>
