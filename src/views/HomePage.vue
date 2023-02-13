<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>{{ data.workout.app.name }}</ion-title>
                <ion-buttons slot="primary">
                    <ion-button color="dark" @click="
                    goTo(data.workout.app.repo)">
                        <ion-icon :icon="logoGithub"> </ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <section class="content ion-text-center">
                <ion-text class="ion-margin-top">
                    <h1>Welcome back dude</h1>
                </ion-text>
                <ion-text color="medium">
                    <p class="ion-no-margin">
                        What are you planning to work on today?
                    </p>
                </ion-text>
                <section class="ion-text-center ion-padding">
                    <swiper :slides-per-view="1" :pagination="true" :modules="modules">
                        <swiper-slide class="card-wrapper" v-for="workout in data.workout.workout" :key="workout.id">
                            <div class="workout-card"
                                :style="'background-image: url(\'./assets/img/' + workout.id + '.jpg'">
                                <h1>
                                    {{ workout.name }}
                                </h1>
                                <p>
                                    {{ workout.description }}
                                </p>
                            </div>
                            <ion-button shape="round" :router-link="'/workout/' + workout.id" size="large">
                                Let's go
                            </ion-button>
                        </swiper-slide>
                    </swiper>
                </section>

                <ion-button fill="clear" shape="round" router-link="/about">
                    <ion-icon :icon="informationCircleOutline" slot="start"></ion-icon>
                    About
                </ion-button>
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
    IonIcon,
    IonButtons,
} from '@ionic/vue'
import { informationCircleOutline, logoGithub } from 'ionicons/icons'
import { defineComponent } from 'vue'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

import { useDataStore } from '@/stores/data'

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
        IonIcon,
        IonButtons,
    },
    setup() {
        const data: any = useDataStore()
        return {
            informationCircleOutline,
            logoGithub,
            modules: [Pagination],
            data
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
.card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
}

.workout-card {

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 500px;
    height: 550px;
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

.workout-card h1,
.workout-card p {
    color: white;
    margin: 0;
}

@media screen and (max-width: 500px) {
    .workout-card {
        width: 280px;
        height: 400px;
    }
}
</style>
