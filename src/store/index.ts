import {createStore, useStore as baseUseStore} from 'vuex'
import type {Store} from 'vuex'
import type {InjectionKey} from 'vue'
import users from './modules/users'
import checks from './modules/checks'
import news from "@/store/modules/news";
import signs from "@/store/modules/signs";
import type {UsersState} from "./modules/users"
import type {ChecksState} from "./modules/checks"
import type {SignsState} from "./modules/signs"
import type {NewsState} from "./modules/news"

export interface State {
}

export interface StateAll extends State {
    users: UsersState
    checks: ChecksState
    signs: SignsState
    news: NewsState
}

export const key: InjectionKey<Store<StateAll>> = Symbol()

export function useStore() {
    return baseUseStore(key)
}

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        users, checks, news, signs
    }
})
