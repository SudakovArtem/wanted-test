<script setup lang="ts">
import {useUsersStore} from "@/stores/users";
import {computed} from "vue";
import UserItem from "@/components/UserItem.vue";
import type {ComputedRef} from "vue";
import type {User} from "@/types/User";

const usersStore = useUsersStore()

const users: ComputedRef<User[]> = computed(() => usersStore.filteredUsers)
const loading: ComputedRef<boolean> = computed(() => usersStore.isLoading)
</script>

<template>
  <v-card :loading="loading" :min-height="300">
    <transition name="slide-fade">
      <v-list v-show="!loading" three-line>
        <v-list-subheader>
          List
        </v-list-subheader>
        <template v-for="(user, index) in users" :key="index">
          <user-item :data="user"/>

          <v-divider
              v-if="index < users.length - 1"
          ></v-divider>
        </template>
      </v-list>
    </transition>
  </v-card>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
