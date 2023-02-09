<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Arms Workout</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large"> Arms Workout </ion-title>
                </ion-toolbar>
            </ion-header>
            <StopWatch />
            <section class="content">
                <ion-text color="medium">
                    <p class="ion-padding ion-no-margin">
                        Hint: tap on the thumbnail to see tutorials
                    </p>
                </ion-text>
                <h1 v-if="$route.params.id == 'arm'">
                    Arm yo {{ data.workout.app.name }}

                    <pre>
                        {{  data.workout.workout.arm }}
                    </pre>
                </h1>
                <h1 v-else-if="$route.params.id == 'chest'">
                    Chest yo
                </h1>
                <h1 v-else>
                    Wtf man
                </h1>
            </section>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StopWatch from './components/StopWatch.vue'
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,IonText
} from '@ionic/vue'

import { useDataStore } from '@/stores/data'

export default defineComponent({
    name: 'ArmWorkoutPage',
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonTitle,
        IonContent,IonText,
        StopWatch,
    },
    setup() {
        const data:any = useDataStore()

        return {
            data
        }
    },
    data() {
        return {
        }
    },
    methods: {
        goTo(link: string) {
            window.open(link)
        },
    },
})
</script>

<style scoped>
ion-thumbnail {
    height: 5rem;
    width: 5rem;
    cursor: pointer;
}

ion-thumbnail ion-img {
    border-radius: 0.5rem;
    object-fit: cover;
    aspect-ratio: 1 / 1;
}

.content ion-toolbar {
    --background: transparent;
    padding-top: 1rem;
}

.finished {
    color: var(--ion-color-primary);
    text-decoration: line-through;
    text-decoration-color: var(--ion-color-primary);
}

.workoutTitle {
    text-transform: capitalize;
    font-weight: 500;
}
</style>