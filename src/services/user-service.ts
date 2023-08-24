import type {User} from "@/types/User";
import {USERS_URL} from "@/global";

const loadUsers = async (): Promise<User[]> => {
    try {
        const response = await fetch(USERS_URL)
        return await response.json()
    } catch (e) {
        console.log(e)
        return []
    }
}

export {loadUsers}
