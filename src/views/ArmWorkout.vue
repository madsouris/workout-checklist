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
                        <br />
                        {{ store.app.app.name }} has {{ store.pine }}
                    </p>
                </ion-text>
                <ion-accordion-group
                    :value="['first', 'second']"
                    class="ion-margin-bottom">
                    <ion-accordion value="first">
                        <ion-item slot="header">
                            <ion-label>Round 1</ion-label>
                        </ion-item>
                        <ion-list slot="content">
                            <ion-item
                                v-for="workout in workouts.arm[0].round1"
                                :key="workout.id">
                                <ion-thumbnail
                                    slot="start"
                                    @click="goTo(workout.url)">
                                    <ion-img
                                        :src="
                                            '/assets/img/arm/' +
                                            workout.id +
                                            '.jpg'
                                        "></ion-img>
                                </ion-thumbnail>
                                <ion-label
                                    class="workoutTitle"
                                    :class="{ finished: workout.status }">
                                    {{ workout.name }}
                                    <p>x {{ workout.amount }}</p>
                                </ion-label>

                                <ion-checkbox
                                    @ionChange="
                                        workout.status = !workout.status
                                    "
                                    slot="end"
                                    :checked="workout.status"></ion-checkbox>
                            </ion-item>
                        </ion-list>
                    </ion-accordion>
                    <ion-accordion value="second">
                        <ion-item slot="header">
                            <ion-label>Round 2</ion-label>
                        </ion-item>
                        <ion-list slot="content">
                            <ion-item
                                v-for="workout in workouts.arm[1].round2"
                                :key="workout.id">
                                <ion-thumbnail
                                    slot="start"
                                    @click="goTo(workout.url)">
                                    <ion-img
                                        :src="
                                            '/assets/img/arm/' +
                                            workout.id +
                                            '.jpg'
                                        "></ion-img>
                                </ion-thumbnail>
                                <ion-label
                                    class="workoutTitle"
                                    :class="{ finished: workout.status }">
                                    {{ workout.name }}
                                    <p>x {{ workout.amount }}</p>
                                </ion-label>

                                <ion-checkbox
                                    @ionChange="
                                        workout.status = !workout.status
                                    "
                                    slot="end"
                                    :checked="workout.status"></ion-checkbox>
                            </ion-item>
                        </ion-list>
                    </ion-accordion>
                </ion-accordion-group>
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
    IonItem,
    IonLabel,
    IonList,
    IonThumbnail,
    IonImg,
    IonCheckbox,
    IonText,
    IonAccordionGroup,
    IonAccordion,
} from '@ionic/vue'

//import JSON data
import workouts from '../data.json'

// add data from pinia
import { dataStore } from '@/store/data'

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
        IonItem,
        IonLabel,
        IonList,
        IonThumbnail,
        IonImg,
        IonCheckbox,
        StopWatch,
        IonText,
        IonAccordionGroup,
        IonAccordion,
    },
    setup() {
        const store = dataStore()
        return {
            store,
        }
    },
    data() {
        return {
            workouts: workouts,
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
