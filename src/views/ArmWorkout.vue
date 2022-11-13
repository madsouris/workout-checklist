<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title> Workout</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large"> Workout title </ion-title>
                </ion-toolbar>
            </ion-header>
            <StopWatch />
            <section class="content">
                <ion-text color="medium">
                    <p class="ion-padding ion-no-margin">
                        Hint: tap on the thumbnail to see tutorials
                    </p>
                </ion-text>
                <ion-accordion-group :value="['first', 'second']">
                    <ion-accordion value="first">
                        <ion-item slot="header">
                            <ion-label>Round 1</ion-label>
                        </ion-item>
                        <ion-list slot="content">
                            <ion-item
                                v-for="workout in workouts"
                                :key="workout">
                                <ion-thumbnail slot="start">
                                    <ion-img
                                        src="http://placekitten.com/g/300"></ion-img>
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
                        <ion-item slot="header" color="light">
                            <ion-label>Round 2</ion-label>
                        </ion-item>
                        <ion-list slot="content">
                            <h1>Round 2</h1>
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
    data() {
        return {
            workouts: {
                1: {
                    amount: 15,
                    name: 'Side Raise',
                    status: false,
                },
                2: {
                    amount: 15,
                    name: 'Incine Row',
                    status: false,
                },
                3: {
                    amount: 15,
                    name: 'triceps kickback',
                    status: false,
                },
                4: {
                    amount: 15,
                    name: 'shoulder press',
                    status: false,
                },
                5: {
                    amount: 15,
                    name: 'triceps extension',
                    status: false,
                },
                6: {
                    amount: 15,
                    name: 'shoulder shrugs',
                    status: false,
                },
                7: {
                    amount: 15,
                    name: 'hammer curl',
                    status: false,
                },
                8: {
                    amount: 15,
                    name: 'upright tows',
                    status: false,
                },
                9: {
                    amount: 15,
                    name: 'biceps curl',
                    status: false,
                },
                10: {
                    amount: 15,
                    name: 'wrist curl',
                    status: false,
                },
                11: {
                    amount: 20,
                    name: 'squats with dumbbells',
                    status: false,
                },
                12: {
                    amount: 1,
                    name: 'Boxer bounce 3mn',
                    status: false,
                },
            },
        }
    },
    methods: {
        startTimer() {
            console.log('started')
        },
    },
})
</script>

<style scoped>
ion-thumbnail {
    height: 5rem;
    width: 5rem;
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
