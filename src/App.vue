<script setup lang="ts">
import {onMounted, reactive} from "vue";
import {loadUsers} from "@/services/user-service";
import {useUsersStore} from "@/stores/users";
import PageContent from "@/components/PageContent.vue";
import PageFooter from "@/components/PageFooter.vue";
import type {User} from "@/types/User";

const userStore = useUsersStore()

const localAttrs = reactive({
  absolute: true,
  fixed: false
})

onMounted(async () => {
  userStore.setLoading(true)
  const users: User[] = await loadUsers()
  userStore.setUsers(users)
  userStore.setLoading(false)
})
</script>

<template>
  <v-app>
    <v-main>
      <page-content/>
    </v-main>
    <v-footer :app="true" v-bind="localAttrs">
      <page-footer/>
    </v-footer>
  </v-app>
</template>

