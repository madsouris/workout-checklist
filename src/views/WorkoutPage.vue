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
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">
                        {{ $route.params.id }} Workout
                    </ion-title>
                </ion-toolbar>
            </ion-header>
            <StopWatch />
            <section class="content">
                <ion-text color="medium">
                    <p class="ion-padding ion-no-margin">
                        Hint: tap on the thumbnail to see tutorials
                    </p>
                </ion-text>

                <ion-accordion-group :value="['round1', 'round2']" class="ion-margin-bottom"
                    v-if="$route.params.id == 'arm'">
                    <ion-accordion value="round1">
                        <ion-item slot="header">
                            <ion-label>Round 1</ion-label>
                        </ion-item>
                        <ion-list slot="content">
                            <ion-item v-for="workout in path.round1" :key="workout.id">
                                <ion-thumbnail slot="start" @click="goTo(workout.url)">
                                    <ion-img :src="
                                        '/assets/img/arm/' +
                                        workout.id +
                                        '.jpg'
                                    "></ion-img>
                                </ion-thumbnail>
                                <ion-label class="workoutTitle" :class="{ finished: workout.status }">
                                    {{ workout.name }}
                                    <p>x {{ workout.amount }}</p>
                                </ion-label>

                                <ion-checkbox @ionChange="
                                    workout.status = !workout.status
                                " slot="end" :checked="workout.status"></ion-checkbox>
                            </ion-item>
                        </ion-list>
                    </ion-accordion>
                    <ion-accordion value="round2">
                        <ion-item slot="header">
                            <ion-label>Round 2</ion-label>
                        </ion-item>
                        <ion-list slot="content">
                            <ion-item v-for="workout in path.round2" :key="workout.id">
                                <ion-thumbnail slot="start" @click="goTo(workout.url)">
                                    <ion-img :src="
                                        '/assets/img/arm/' +
                                        workout.id +
                                        '.jpg'
                                    "></ion-img>
                                </ion-thumbnail>
                                <ion-label class="workoutTitle" :class="{ finished: workout.status }">
                                    {{ workout.name }}
                                    <p>x {{ workout.amount }}</p>
                                </ion-label>

                                <ion-checkbox @ionChange="
                                    workout.status = !workout.status
                                " slot="end" :checked="workout.status"></ion-checkbox>
                            </ion-item>
                        </ion-list>
                    </ion-accordion>
                </ion-accordion-group>

                <ion-accordion-group :value="['round1', 'round2']" class="ion-margin-bottom"
                    v-else-if="$route.params.id == 'body'">
                    <ion-accordion value="round1">
                        <ion-item slot="header">
                            <ion-label>Round 1</ion-label>
                        </ion-item>
                        <ion-list slot="content">
                            <ion-item v-for="workout in data.workout.workout.body.round1" :key="workout.id">
                                <ion-thumbnail slot="start" @click="goTo(workout.url)">
                                    <ion-img :src="
                                        '/assets/img/body/' +
                                        workout.id +
                                        '.jpg'
                                    "></ion-img>
                                </ion-thumbnail>
                                <ion-label class="workoutTitle" :class="{ finished: workout.status }">
                                    {{ workout.name }}
                                    <p>x {{ workout.amount }}</p>
                                </ion-label>

                                <ion-checkbox @ionChange="
                                    workout.status = !workout.status
                                " slot="end" :checked="workout.status"></ion-checkbox>
                            </ion-item>
                        </ion-list>
                    </ion-accordion>
                    <ion-accordion value="round2">
                        <ion-item slot="header">
                            <ion-label>Round 2</ion-label>
                        </ion-item>
                        <ion-list slot="content">
                            <ion-item v-for="workout in data.workout.workout.body
                            .round2" :key="workout.id">
                                <ion-thumbnail slot="start" @click="goTo(workout.url)">
                                    <ion-img :src="
                                        '/assets/img/body/' +
                                        workout.id +
                                        '.jpg'
                                    "></ion-img>
                                </ion-thumbnail>
                                <ion-label class="workoutTitle" :class="{ finished: workout.status }">
                                    {{ workout.name }}
                                    <p>x {{ workout.amount }}</p>
                                </ion-label>

                                <ion-checkbox @ionChange="
                                    workout.status = !workout.status
                                " slot="end" :checked="workout.status"></ion-checkbox>
                            </ion-item>
                        </ion-list>
                    </ion-accordion>
                </ion-accordion-group>

                <h1 v-else>No such thing as "{{ $route.params.id }}"</h1>
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
        StopWatch,
    },
    setup() {
        const data: any = useDataStore()
        const route = useRoute()

        let path: any = "data.workout.workout." + route.params.id

        console.log(path)

        return {
            data,
            path
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
    color: var(--ion-color-primary);
    text-decoration: line-through;
    text-decoration-color: var(--ion-color-primary);
}

.workoutTitle {
    text-transform: capitalize;
    font-weight: 500;
}
</style>
