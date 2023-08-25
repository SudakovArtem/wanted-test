import {FILTER_TIMEOUT, scoreValues} from "@/global";
import {computed, reactive, ref, watch} from 'vue'
import {defineStore} from 'pinia'
import {Scores} from "@/types/User";
import type {FilterParams, User} from "@/types/User";
import type {ComputedRef, Ref, UnwrapNestedRefs} from 'vue'

export const useUsersStore = defineStore('counter', () => {
    const users: Ref<User[]> = ref([])
    const loading: Ref<boolean> = ref(false)

    const usersInLocalStorage: string | null = localStorage.getItem('users')
    if (usersInLocalStorage) {
        users.value = JSON.parse(usersInLocalStorage)._value
    }

    const filterParams: UnwrapNestedRefs<FilterParams> = reactive({
        country: null,
        score: null
    })

    const filteredUsers: ComputedRef<User[]> = computed(() => users.value.filter((user: User) => {
        if (filterParams.country && filterParams.country !== user.country) {
            return false
        }
        if (filterParams.score) {
            if (filterParams.score === Scores.Big) {
                return user.score > scoreValues[Scores.Big]
            } else if (filterParams.score === Scores.Small) {
                return user.score < scoreValues[Scores.Small]
            } else {
                return user
            }
        }
        return user
    }))

    const isLoading: ComputedRef<boolean> = computed(() => loading.value)

    const setUsers = (data: User[]): void => {
        users.value = data
    }

    const setFilterParams = async (params: FilterParams): Promise<void> => {
        loading.value = true
        await new Promise((resolve: Function) => setTimeout(() => {
            for (const filterParamsKey in filterParams) {
                filterParams[filterParamsKey as keyof FilterParams] = params[filterParamsKey as keyof FilterParams]
            }
            resolve()
        }, FILTER_TIMEOUT))
        loading.value = false
    }

    const setLoading = (value: boolean): void => {
        loading.value = value
    }

    watch(() => users, (state) => {
        localStorage.setItem('users', JSON.stringify(state))
    }, {deep: true})

    return {users, filteredUsers, isLoading, setUsers, setFilterParams, setLoading}
})
