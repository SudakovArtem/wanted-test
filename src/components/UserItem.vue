<script setup lang="ts">
import type {User} from "@/types/User";
import {ref} from "vue";
import type {Ref} from "vue";

interface Props {
  data: User
}

const props = defineProps<Props>()
const collapse: Ref<boolean> = ref(false)
</script>

<template>
  <v-list-item :prepend-avatar="props.data.avatar" @click="collapse = !collapse">
    <template #default>
      <v-list-item-title>
        <span v-html="props.data.title"/>
      </v-list-item-title>
      <v-list-item-subtitle>
        <span v-html="props.data.subtitle"/>
      </v-list-item-subtitle>
    </template>
  </v-list-item>
  <div :class="['user-address-wrapper', {'is-active': collapse}]">
    <div class="user-address-content">
      <div>Address: {{props.data.address}}</div>
    </div>
  </div>
</template>

<style scoped>
.user-address-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition: grid-template-rows 0.3s ease;
}

.user-address-wrapper.is-active {
  grid-template-rows: 1fr;
}

.user-address-content {
  overflow: hidden;
  padding: 0 16px;
  font-size: 14px;
}
</style>
