<template>
    <section class="timer">
        <p>
            <span> {{ stopwatch.hours }} </span>:
            <span> {{ stopwatch.minutes }} </span>:
            <span>{{ stopwatch.seconds }} </span>
        </p>
        <div>
            <ion-button
                shape="round"
                @click="stopwatch.start()"
                fill="solid"
                color="primary">
                <ion-icon :icon="play" slot="icon-only"></ion-icon>
            </ion-button>
            <ion-button shape="round" fill="clear" @click="pauseTimer">
                <ion-icon slot="icon-only" :icon="pause"></ion-icon>
            </ion-button>
            <ion-button shape="round" fill="clear" @click="setOpen(true)">
                <ion-icon :icon="stop" slot="icon-only"></ion-icon>
            </ion-button>
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
import { IonButton, IonIcon, IonAlert } from '@ionic/vue'
import { play, pause, stop } from 'ionicons/icons'
import { useStopwatch } from 'vue-timer-hook'

const stopwatch = useStopwatch(0, false)

const isOpenRef = ref(false)
const setOpen = (state: boolean) => (isOpenRef.value = state)

function pauseTimer() {
    stopwatch.pause()
}

function backHome() {
    stopwatch.reset(0, false)
    const url = new URL('/', window.location.origin)
    window.location.href = url.toString()
}
</script>

<style scoped>
ion-button {
    --background: transparent;
    --color: white;
}

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
    font-size: 2rem;
    font-weight: 800;
    background: linear-gradient(223deg, #1a2857, #400936, #0c4009);
    background-size: 180% 180%;
    animation: gradient-animation 6s ease infinite;
    position: sticky;
    top: 0;
    z-index: 909;
}

.timer p {
    margin: 0;
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
</style>
