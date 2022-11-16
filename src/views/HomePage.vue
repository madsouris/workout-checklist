<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>Workout checklist</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <section class="content ion-text-center">
                <ion-text class="ion-margin-top">
                    <h1>Welcome back dude</h1>
                </ion-text>
                <ion-text color="medium">
                    <p class="ion-no-margin">
                        What are planning to work on today?
                    </p>
                </ion-text>
                <section class="ion-text-center ion-padding">
                    <swiper
                        :slides-per-view="1"
                        :pagination="true"
                        :modules="modules">
                        <swiper-slide class="card-wrapper">
                            <div class="workout-card arm">
                                <h1>Arms and shoulders focus</h1>
                                <p>With more workouts to balance</p>
                            </div>
                            <ion-button
                                shape="round"
                                router-link="/arm"
                                size="large">
                                Let's go
                            </ion-button>
                        </swiper-slide>
                        <swiper-slide class="card-wrapper">
                            <div class="workout-card body">
                                <h1>Chest & body focus</h1>
                                <p>With more workouts to balance</p>
                            </div>
                            <ion-button
                                shape="round"
                                router-link="/body"
                                size="large">
                                Let's go
                            </ion-button>
                        </swiper-slide>
                    </swiper>
                </section>
            </section>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonText,
    IonButton,
} from '@ionic/vue'
import { bodyOutline, shirtOutline } from 'ionicons/icons'
import { defineComponent } from 'vue'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

export default defineComponent({
    name: 'HomePage',
    components: {
        IonContent,
        IonPage,
        IonText,
        IonHeader,
        IonToolbar,
        IonTitle,
        Swiper,
        SwiperSlide,
        IonButton,
    },
    setup() {
        return {
            bodyOutline,
            shirtOutline,
            modules: [Pagination],
        }
    },
})
</script>

<style scoped>
.card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
}
.workout-card {
    width: 500px;
    height: 600px;

    margin: 0 auto;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1rem;
    align-items: center;
    text-align: center;
    box-shadow: 5px 8px 20px rgba(0, 0, 0, 0.25);
    transform: rotate(1deg);
    cursor: grab;
}

.arm {
    background: url('../../public/assets/img/arm.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.body {
    background: url('../../public/assets/img/body.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

.workout-card h1,
.workout-card p {
    color: white;
    margin: 0;
}

@media screen and (max-width: 500px) {
    .workout-card {
        width: 300px;
        height: 500px;
    }
}
</style>
