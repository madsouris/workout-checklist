import { defineStore } from 'pinia'

//import JSON data
import app from '../data1.json'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const dataStore = defineStore('data', {
    // other options...
    state: () => ({
        msg: 'Yo this is from pina',
        pine: 2,
        app: app,
    }),
    actions: {
        addPine() {
            this.pine++
        },
    },
})
