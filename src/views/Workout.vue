<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title> Workout</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <section class="content">
                <ion-toolbar>
                    <ion-title size="large"> Workout title </ion-title>
                </ion-toolbar>
                <ion-list>
                    <ion-item
                        v-for="workout in workouts"
                        :key="workout"
                        class="workoutItem">
                        <ion-thumbnail slot="start">
                            <ion-img
                                src="http://placekitten.com/g/300"></ion-img>
                        </ion-thumbnail>
                        <ion-label :class="{ finished: workout.status }">
                            {{ workout.name }}
                            <p>x {{ workout.amount }}</p>
                        </ion-label>
                        <ion-checkbox
                            @ionChange="workout.status = !workout.status"
                            slot="end"
                            :checked="workout.status"></ion-checkbox>
                    </ion-item>
                </ion-list>
            </section>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
} from '@ionic/vue'

export default defineComponent({
    name: 'WorkoutPage',
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
    methods: {},
})
</script>

<style scoped>
ion-thumbnail ion-img {
    border-radius: 0.5rem;
}

.content ion-toolbar {
    --background: transparent;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.finished {
    color: var(--ion-color-primary);
    text-decoration: line-through;
    text-decoration-color: var(--ion-color-primary);
}
.line-normal {
    text-decoration: initial;
}
</style>
