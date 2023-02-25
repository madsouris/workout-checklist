import { defineStore } from 'pinia'

import { useStopwatch } from 'vue-timer-hook'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application

export const useStopwatchStore = defineStore('stopwatch', {
    state: () => ({
        stopwatch: useStopwatch(0, false),
    }),

    actions: {
        start() {
            this.stopwatch.start()
        },
        pause() {
            this.stopwatch.pause()
        },
        stop() {
            this.stopwatch.reset(0, false)
        },
    },
})
