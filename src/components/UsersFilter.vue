<script setup lang="ts">
import {reactive} from "vue";
import {Countries, Scores} from "@/types/User";
import {useUsersStore} from "@/stores/users";
import type {UnwrapNestedRefs} from "vue";
import type {FilterParams} from "@/types/User";

type SelectItem = {
  title: string,
  value: string
}

const userStore = useUsersStore()

const filter: UnwrapNestedRefs<FilterParams> = reactive({
  country: null,
  score: null
})

const getSelectItemObject = (el: [string, string]): SelectItem => ({
  title: el[1],
  value: el[1],
})

const countrySelectItems: SelectItem[] = Object.entries(Countries).map(getSelectItemObject)
const scoreSelectItems: SelectItem[] = Object.entries(Scores).map(getSelectItemObject)

const onChange = (): void => {
  userStore.setFilterParams({...filter})
}
</script>

<template>
  <form action="#">
    <v-select
        v-model="filter.country"
        :clearable="true"
        label="Select"
        :items="countrySelectItems"
        variant="outlined"
        @update:modelValue="onChange"
    ></v-select>

    <v-select
        v-model="filter.score"
        :clearable="true"
        label="Select"
        :items="scoreSelectItems"
        variant="outlined"
        @update:modelValue="onChange"
    ></v-select>
  </form>
</template>

<style scoped>

</style>
