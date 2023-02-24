<template>
    <section class="timer" :style="
        stopwatch.stopwatch.isRunning
            ? 'background: var(--ion-color-danger)'
            : 'background: #f5f5f5'
    ">
        <h1 v-if="!stopwatch.stopwatch.isRunning">Just do it!</h1>
        <h1 v-else>Keep going!</h1>
        <section class="timer-time">
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
            <button v-if="!stopwatch.stopwatch.isRunning" @click="start()" class="btn play">
                <ion-icon :icon="play" slot="icon-only"></ion-icon>
            </button>
            <button v-if="stopwatch.stopwatch.isRunning" @click="stopwatch.pause" class="btn pause">
                <ion-icon slot="icon-only" :icon="pause"></ion-icon>
            </button>
            <button id="stop-workout" @click="stopwatch.pause()" class="btn stop" :disabled="isStarted == false">
                <ion-icon :icon="stop" slot="icon-only"></ion-icon>
            </button>

            <ion-modal ref="modal" trigger="stop-workout" can-dismiss="true" :initial-breakpoint="0.5"
                :breakpoints="[0, 0.5, 0.75, 0.9]">
                <ion-header>
                    <ion-toolbar>
                        <ion-title>Are you finished?</ion-title>
                    </ion-toolbar>
                </ion-header>
                <ion-content class="ion-padding ion-text-center">
                    <h2 class="ion-margin-bottom capitalize text-black">
                        {{ $route.params.id }} Workout
                    </h2>

                    <section class="timer-time">
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

                    <p class="text-black">
                        You did <span class="text-mono">{{ stopwatch.stopwatch.hours }}hr
                            {{ stopwatch.stopwatch.minutes }}min</span> of
                        <span class="capitalize">{{ $route.params.id }} workout</span>. Don’t forget to stretch and rest a
                        little bit before
                        a shower.
                    </p>

                    <!-- <ion-button fill="clear" @click="backHome()">
                        Share
                    </ion-button> -->

                    <button class="finish-button" @click="backHome()">
                        Finish
                    </button>
                </ion-content>
            </ion-modal>
        </div>
    </section>
</template>

<script lang="ts" setup>
import {
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonModal,
} from '@ionic/vue'
import { play, pause, stop } from 'ionicons/icons'

import { useStopwatchStore } from '@/stores/stopwatch'

const stopwatch = useStopwatchStore()

let isStarted = false

function start() {
    stopwatch.start()
    isStarted = true
}

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

.timer-time {
    font-size: 3rem;
    font-weight: 600;
    margin: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}

.timer-time span.time {
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

.capitalize {
    text-transform: capitalize;
}

.text-mono {
    font-family: monospace;
    font-weight: bold;
    font-size: 1.2rem;
}

.finish-button {
    color: var(--ion-color-danger);
    background: black;
    border: none;
    border-radius: 2rem;
    padding: 1rem 2rem;
}

ion-modal ion-toolbar,
ion-modal ion-content {
    --background: var(--ion-color-danger);
    --border-color: rgba(0, 0, 0, 0.1);
    --color: black;
}
</style>
