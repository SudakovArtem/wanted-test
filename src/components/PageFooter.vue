<script setup lang="ts">
const date: number = new Date().getFullYear()
</script>

<template>
  <v-card
      :flat="true"
      tile
      width="100%"
      class="red lighten-1 text-center"
  >
    <v-divider></v-divider>

    <v-card-text class="white--text">
      {{ date }} — <strong>Vuetify</strong>
    </v-card-text>
  </v-card>
</template>
