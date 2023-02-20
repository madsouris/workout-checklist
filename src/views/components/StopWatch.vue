<template>
    <section
        class="timer"
        :style="
            stopwatch.stopwatch.isRunning
                ? 'background: var(--ion-color-danger)'
                : 'background: #f5f5f5'
        ">
        <h1 v-if="!stopwatch.stopwatch.isRunning">Just do it!</h1>
        <h1 v-else>Keep going!</h1>
        <section>
            <span class="time">
                {{ stopwatch.stopwatch.hours
                }}<span class="time-indicator">Hour</span>
            </span>
            <span class="time">
                {{ stopwatch.stopwatch.minutes
                }}<span class="time-indicator">Minute</span>
            </span>
            <span class="time">
                {{ stopwatch.stopwatch.seconds
                }}<span class="time-indicator">Second</span>
            </span>
        </section>
        <div>
            <button
                v-if="!stopwatch.stopwatch.isRunning"
                @click="stopwatch.start"
                class="btn play">
                <ion-icon :icon="play" slot="icon-only"></ion-icon>
            </button>
            <button
                v-if="stopwatch.stopwatch.isRunning"
                @click="stopwatch.pause"
                class="btn pause">
                <ion-icon slot="icon-only" :icon="pause"></ion-icon>
            </button>
            <button
                v-if="stopwatch.stopwatch.isRunning"
                @click="setOpen(true)"
                class="btn stop">
                <ion-icon :icon="stop" slot="icon-only"></ion-icon>
            </button>
            <ion-alert
                :is-open="isOpenRef"
                header="Finish"
                sub-header="You can do more you know?"
                message="Congratulations by the way!"
                :buttons="['Finish']"
                @didDismiss="setOpen(false), backHome()"></ion-alert>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { IonIcon, IonAlert } from '@ionic/vue'
import { play, pause, stop } from 'ionicons/icons'

import { useStopwatchStore } from '@/stores/stopwatch'

const stopwatch = useStopwatchStore()

const isOpenRef = ref(false)
const setOpen = (state: boolean) => (isOpenRef.value = state)

function backHome() {
    const url = new URL('/', window.location.origin)
    window.location.href = url.toString()
}
</script>

<style scoped>
.btn {
    border: none;
    border-radius: 3rem;
    display: inline-block;
    width: 4rem;
    height: 4rem;
    font-size: 1.4rem;
}

.play {
    background: black;
    color: white;
}

.pause {
    background: black;
    color: var(--ion-color-danger);
}

.stop {
    background: rgba(0, 0, 0, 0.08);
    color: black;
}
.timer {
    border-radius: 1rem;
    padding: 2rem 1rem;
    margin: 1rem;
    min-height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    color: black;
    box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.16);
    border: 1px solid rgba(0, 0, 0, 0.05);
    position: sticky;
    top: 0;
    z-index: 909;
}

.timer h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    letter-spacing: -0.05rem;
}

.timer div {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}

.timer section {
    font-size: 3rem;
    font-weight: 600;
    margin: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}

.timer section span.time {
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.08);
    padding: 0.5rem 1rem;
    text-align: center;
    border-radius: 0.5rem;
}

.time-indicator {
    font-size: 1rem;
    font-weight: 400;
    margin-left: 0.2rem;
    opacity: 0.5;
}
</style>
