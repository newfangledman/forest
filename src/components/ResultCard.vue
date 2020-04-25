<template>
  <div v-if="Object.keys($attrs.length)">
    {{ $attrs }}
  </div>
</template>

<script>
export default {
  name: 'ResultCard',
  props: { plant: { type: Object, default: () => ({}) } },
  created() {
    console.log(this)
  },
}
</script>

<style lang="scss" scoped></style>
