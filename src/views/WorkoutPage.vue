<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title> {{ $route.params.id }} Workout </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <StopWatch />

            <section class="content" v-if="workoutPath != 'NotFound'">
                <ion-text color="danger">
                    <p class="ion-padding ion-no-margin">
                        Hint: tap on the thumbnail to see tutorials
                    </p>
                </ion-text>

                <ion-accordion-group :value="['round1', 'round2']" class="ion-margin-bottom">
                    <ion-accordion value="round1">
                        <ion-item slot="header">
                            <ion-label><b>Round 1</b></ion-label>
                        </ion-item>
                        <ion-list slot="content">
                            <ion-item v-for="workout in workoutPath.round1" :key="workout.id">
                                <ion-thumbnail slot="start" @click="goTo(workout.url)">
                                    <ion-img :src="
                                        '/assets/img/' +
                                        path +
                                        '/' +
                                        workout.id +
                                        '.jpg'
                                    "></ion-img>
                                </ion-thumbnail>
                                <ion-label class="workoutTitle" :class="{ finished: workout.status }">
                                    {{ workout.name }}
                                    <p>x {{ workout.amount }}</p>
                                </ion-label>

                                <ion-checkbox color="danger" @ionChange="
                                    workout.status = !workout.status
                                " slot="end" :checked="workout.status"></ion-checkbox>
                            </ion-item>
                        </ion-list>
                    </ion-accordion>
                    <ion-accordion value="round2">
                        <ion-item slot="header">
                            <ion-label><b>Round 2</b></ion-label>
                        </ion-item>
                        <ion-list slot="content">
                            <ion-item v-for="workout in workoutPath.round2" :key="workout.id">
                                <ion-thumbnail slot="start" @click="goTo(workout.url)">
                                    <ion-img :src="
                                        '/assets/img/' +
                                        path +
                                        '/' +
                                        workout.id +
                                        '.jpg'
                                    "></ion-img>
                                </ion-thumbnail>
                                <ion-label class="workoutTitle" :class="{ finished: workout.status }">
                                    {{ workout.name }}
                                    <p>x {{ workout.amount }}</p>
                                </ion-label>

                                <ion-checkbox color="danger" @ionChange="
                                    workout.status = !workout.status
                                " slot="end" :checked="workout.status"></ion-checkbox>
                            </ion-item>
                        </ion-list>
                    </ion-accordion>
                </ion-accordion-group>
            </section>
            <div v-else class="ion-text-center">
                <h1>" {{ $route.params.id }}" is not here</h1>
                <p>
                    You got the wrong link, please go back home and select a
                    workout to start
                </p>
                <ion-button fill="outline" router-link="/" size="large" shape="round">
                    Home
                </ion-button>
            </div>
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
    IonContent,
    IonText,
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
    IonList,
    IonThumbnail,
    IonImg,
    IonCheckbox,
    IonButton,
} from '@ionic/vue'

import { useDataStore } from '@/stores/data'
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'ArmWorkoutPage',
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonTitle,
        IonContent,
        IonText,
        IonAccordionGroup,
        IonAccordion,
        IonItem,
        IonLabel,
        IonList,
        IonThumbnail,
        IonImg,
        IonCheckbox,
        IonButton,
        StopWatch,
    },
    setup() {
        const data: any = useDataStore()
        const route = useRoute()

        let path = route.params.id

        let workoutPath

        //set workout path from route params id
        switch (path) {
            case 'arm':
                workoutPath = data.workout.workout.arm
                break
            case 'body':
                workoutPath = data.workout.workout.body
                break
            case 'core':
                workoutPath = data.workout.workout.core
                break

            default:
                workoutPath = 'NotFound'
                break
        }

        return {
            data,
            workoutPath,
            path,
        }
    },
    data() {
        return {}
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

ion-title {
    text-transform: capitalize;
}

.content ion-toolbar {
    --background: transparent;
    padding-top: 1rem;
}

.finished {
    color: var(--ion-color-danger);
    text-decoration: line-through;
    text-decoration-color: var(--ion-color-danger);
}

.workoutTitle {
    text-transform: capitalize;
    font-weight: 500;
}
</style>
