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

                <ion-accordion-group
                    :value="['first', 'second']"
                    class="ion-margin-bottom"
                    v-if="$route.params.id == 'arm'">
                    <ion-accordion value="first">
                        <ion-item slot="header">
                            <ion-label>Round 1</ion-label>
                        </ion-item>
                        <ion-list slot="content">
                            <ion-item
                                v-for="workout in data.workout.workout.arm
                                    .round1"
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
                                v-for="workout in data.workout.workout.arm
                                    .round2"
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

                <h1 v-else-if="$route.params.id == 'chest'">Chest yo</h1>
                <h1 v-else>Wtf man</h1>
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

        return {
            data,
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