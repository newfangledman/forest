<template>
  <div>
    {{ commonName }}
    {{ latinName }}
    {{ water }}
    {{ shade }}
    {{ sun }}
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

<style lang="scss" scoped></style>
