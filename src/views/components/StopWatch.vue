<template>
    <section class="timer">

        <section>
            <span>
                {{ stopwatch.stopwatch.hours }}<span class="time-indicator">Hour</span>
            </span>
            <span>
                {{ stopwatch.stopwatch.minutes }}<span class="time-indicator">Minute</span>
            </span>
            <span>
                {{ stopwatch.stopwatch.seconds }}<span class="time-indicator">Second</span>
            </span>

        </section>
        <div>
            <ion-button shape="round" @click="stopwatch.start" :fill="stopwatch.stopwatch.isRunning ? 'clear' : 'solid'"
                color="primary" :disabled="stopwatch.stopwatch.isRunning">
                <ion-icon :icon="play" slot="icon-only"></ion-icon>
            </ion-button>
            <ion-button shape="round" :fill="stopwatch.stopwatch.isRunning ? 'solid' : 'clear'" color="primary"
                :disabled="!stopwatch.stopwatch.isRunning" @click="stopwatch.pause">
                <ion-icon slot="icon-only" :icon="pause"></ion-icon>
            </ion-button>
            <ion-button shape="round" fill="clear" color="danger" @click="setOpen(true)">
                <ion-icon :icon="stop" slot="icon-only"></ion-icon>
            </ion-button>
            <ion-alert :is-open="isOpenRef" header="Finish" sub-header="You can do more you know?"
                message="Congratulations by the way!" :buttons="['Finish']"
                @didDismiss="setOpen(false); backHome()"></ion-alert>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { IonButton, IonIcon, IonAlert } from '@ionic/vue'
import { play, pause, stop } from 'ionicons/icons'

import { useStopwatchStore } from '@/stores/stopwatch';

const stopwatch = useStopwatchStore()

const isOpenRef = ref(false)
const setOpen = (state: boolean) => (isOpenRef.value = state)

function backHome() {
    const url = new URL('/', window.location.origin)
    window.location.href = url.toString()
}

</script>

<style scoped>
.timer {
    width: 100%;
    padding: 2rem 1rem;
    min-height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    color: white;
    background: linear-gradient(223deg, #1a2857, #400936, #0c4009);
    background-size: 180% 180%;
    animation: gradient-animation 6s ease infinite;
    position: sticky;
    top: 0;
    z-index: 909;
}

.timer section {
    font-size: 5rem;
    font-weight: 600;
    margin: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
}

.timer section span {
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.2);
    padding: 0.5rem 1rem;
    text-align: center;
    border-radius: 0.5rem;
}

.time-indicator {
    font-size: 1rem;
    font-weight: 400;
    margin-left: 0.2rem;
    opacity: 0.7;
}

@keyframes gradient-animation {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

@media screen and (max-width: 500px) {
    .timer section {
        font-size: 2.5rem;
    }

}
</style>
