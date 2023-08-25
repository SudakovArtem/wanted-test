<script setup lang="ts">
interface Props {
  src: string,
  height: number
}

const props = defineProps<Props>()
</script>

<template>
  <v-img
      :src="props.src"
      contain
      :height="props.height"
  />
</template>
