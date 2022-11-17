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
                    <ion-title size="large">
                        Arms and shoulders focus
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
                <ion-accordion-group :value="['first', 'second']">
                    <ion-accordion value="first">
                        <ion-item slot="header">
                            <ion-label>Round 1</ion-label>
                        </ion-item>
                        <ion-list slot="content">
                            <ion-item
                                v-for="workout in workouts.round1"
                                :key="workout">
                                <ion-thumbnail
                                    slot="start"
                                    @click="setOpen(true, workout.url)">
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
                        <ion-item slot="header">
                            <ion-label>Round 2</ion-label>
                        </ion-item>
                        <ion-list slot="content">
                            <ion-item
                                v-for="workout in workouts.round2"
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
                </ion-accordion-group>

                <ion-modal :is-open="isOpen">
                    <ion-header>
                        <ion-toolbar>
                            <ion-buttons slot="start">
                                <ion-button @click="setOpen(false, '')">
                                    Close
                                </ion-button>
                            </ion-buttons>
                            <ion-title>Tutorial</ion-title>
                        </ion-toolbar>
                    </ion-header>
                    <ion-content>
                        <section class="video-embed">
                            <iframe
                                :src="
                                    'https://www.youtube-nocookie.com/embed/' +
                                    video
                                "
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </section>
                    </ion-content>
                </ion-modal>
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
    IonModal,
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
        StopWatch,
        IonText,
        IonAccordionGroup,
        IonAccordion,
        IonModal,
        IonButton,
    },
    data() {
        return {
            isOpen: false,
            video: '',
            workouts: {
                round1: {
                    1: {
                        amount: 15,
                        name: 'Side Raise',
                        status: false,
                        url: 'K5hFLVJnnsw',
                    },
                    2: {
                        amount: 15,
                        name: 'Incine Row',
                        status: false,
                        url: '2LxN3_3atps',
                    },
                    3: {
                        amount: 15,
                        name: 'triceps kickback',
                        status: false,
                        url: 'z3sm6YgpJho',
                    },
                    4: {
                        amount: 15,
                        name: 'shoulder press',
                        status: false,
                        url: 'flpBXsHSVDk',
                    },
                    5: {
                        amount: 15,
                        name: 'triceps extension',
                        status: false,
                        url: '_gsUck-7M74',
                    },
                    6: {
                        amount: 15,
                        name: 'shoulder shrugs',
                        status: false,
                        url: '8lP_eJvClSA',
                    },
                    7: {
                        amount: 15,
                        name: 'hammer curl',
                        status: false,
                        url: 'TwD-YGVP4Bk',
                    },
                    8: {
                        amount: 15,
                        name: 'upright tows',
                        status: false,
                        url: 'Cw2MS1byZBs',
                    },
                    9: {
                        amount: 15,
                        name: 'biceps curl',
                        status: false,
                        url: 'b4jOP-spQW8',
                    },
                    10: {
                        amount: 15,
                        name: 'wrist curl',
                        status: false,
                        url: '7ac_qmBjkFI',
                    },
                    11: {
                        amount: 20,
                        name: 'squats with dumbbells',
                        status: false,
                        url: 'Xjo_fY9Hl9w',
                    },
                    12: {
                        amount: 1,
                        name: 'Boxer bounce 3mn',
                        status: false,
                        url: '0U6MAz3T--4',
                    },
                },
                round2: {
                    1: {
                        amount: 10,
                        name: 'Side Raise',
                        status: false,
                        url: 'K5hFLVJnnsw',
                    },
                    4: {
                        amount: 10,
                        name: 'shoulder press',
                        status: false,
                        url: 'flpBXsHSVDk',
                    },
                    5: {
                        amount: 15,
                        name: 'triceps extension',
                        status: false,
                        url: '_gsUck-7M74',
                    },
                    6: {
                        amount: 15,
                        name: 'shoulder shrugs',
                        status: false,
                        url: '8lP_eJvClSA',
                    },
                    7: {
                        amount: 10,
                        name: 'hammer curl',
                        status: false,
                        url: 'TwD-YGVP4Bk',
                    },
                    9: {
                        amount: 10,
                        name: 'biceps curl',
                        status: false,
                        url: 'b4jOP-spQW8',
                    },
                    10: {
                        amount: 15,
                        name: 'wrist curl',
                        status: false,
                        url: '7ac_qmBjkFI',
                    },
                    11: {
                        amount: 20,
                        name: 'squats with dumbbells',
                        status: false,
                        url: 'Xjo_fY9Hl9w',
                    },
                    12: {
                        amount: 1,
                        name: 'Boxer bounce 3mn',
                        status: false,
                        url: '0U6MAz3T--4',
                    },
                },
            },
        }
    },
    methods: {
        startTimer() {
            console.log('started')
        },
        setOpen(isOpen: boolean, videoLink: string) {
            this.isOpen = isOpen
            this.video = videoLink
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

iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
}

.video-embed {
    min-height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
