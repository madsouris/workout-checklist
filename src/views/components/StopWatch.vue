<template>
    <section class="timer">
        <p>
            <span> {{ stopwatch.hours }} </span>:
            <span> {{ stopwatch.minutes }} </span>:
            <span>{{ stopwatch.seconds }} </span>
        </p>
        <div>
            <ion-button shape="round" @click="stopwatch.start()" fill="solid" color="primary">
                <ion-icon :icon="play" slot="icon-only"></ion-icon>
            </ion-button>
            <ion-button shape="round" fill="clear" @click="stopwatch.pause()">
                <ion-icon slot="icon-only" :icon="pause"></ion-icon>
            </ion-button>
            <ion-button shape="round" fill="clear" @click="stopwatch.reset()">
                <ion-icon :icon="reload" slot="icon-only"></ion-icon>
            </ion-button>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { IonButton, IonIcon } from '@ionic/vue'
import { play, pause, reload } from 'ionicons/icons'
import { useStopwatch } from 'vue-timer-hook'
const autoStart = false
const stopwatch = useStopwatch(autoStart)
stopwatch.pause()
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
