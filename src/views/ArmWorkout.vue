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
                <section class="timer">
                    00:00:00
                    <ion-button shape="round" color="light">Start</ion-button>
                </section>
                <ion-list>
                    <ion-list-header> Round 1 </ion-list-header>

                    <ion-item v-for="workout in workouts" :key="workout">
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
    IonListHeader,
    IonButton,
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
        IonListHeader,
        IonButton,
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

.timer {
    width: 100%;
    min-height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
    color: white;
    font-size: 2rem;
    font-weight: 800;
    background: linear-gradient(223deg, #1a2857, #400936, #0c4009);
    background-size: 180% 180%;
    animation: gradient-animation 6s ease infinite;
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

@media screen and (min-width: 800px) {
    .timer {
        border-radius: 0.5rem;
    }
}
</style>
