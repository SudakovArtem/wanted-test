<script setup lang="ts">
import type {User} from "@/types/User";

interface Props {
  data: User
}

const props = defineProps<Props>()
</script>

<template>
  <v-list-item :prepend-avatar="props.data.avatar">
    <template #default>
      <v-list-item-title>
        <span v-html="props.data.title"/>
      </v-list-item-title>
      <v-list-item-subtitle>
        <span v-html="props.data.subtitle"/>
      </v-list-item-subtitle>
    </template>
  </v-list-item>
</template>

<style scoped>

</style>
