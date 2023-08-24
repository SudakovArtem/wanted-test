<script setup lang="ts">
import PageLogo from "@/components/PageLogo.vue";
import UsersFilter from "@/components/UsersFilter.vue";
import UsersList from "@/components/UsersList.vue";

</script>
<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <page-logo
            src="./src/assets/logo.svg"
            class="my-3"
            :height="200"
        />
      </v-col>

      <v-col cols="12" md="4">
        <users-filter/>
      </v-col>

      <v-col cols="12" md="4">
        <users-list max-width="450" class="mx-auto"/>
      </v-col>
    </v-row>
  </v-container>
</template>
