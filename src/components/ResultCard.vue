<template>
  <div>
    {{ $attrs }}
  </div>
</template>

<script>
export default {
  name: 'ResultCard',
  props: { plant: { type: Object, default: () => ({}) } },
}
</script>

<style lang="scss" scoped></style>
