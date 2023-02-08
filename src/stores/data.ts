import { defineStore } from 'pinia'

//import JSON data
import workouts from '../data-better.json'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application

export const useDataStore = defineStore('data', {
    state: () => ({
        workout: workouts,
    }),

    actions: {},
})
