<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>{{ data.workout.app.name }}</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <InstallBanner />
            <section class="content">
                <section class="welcome">
                    <ion-text>
                        <h1 class="title">Welcome back</h1>
                    </ion-text>
                    <ion-text color="medium">
                        <p class="ion-no-margin">
                            Muscle has expiry date, use it or lose it. Pick a
                            workout and sweat it out. You only need a pair of
                            dumbbells, bench is optional.
                        </p>
                    </ion-text>
                </section>

                <section class="ion-padding ion-margin-bottom">
                    <ion-text color="dark">
                        <p>
                            <small> Swipe for more → </small>
                        </p>
                    </ion-text>
                    <swiper :slides-per-view="'auto'" :space-between="16">
                        <swiper-slide
                            class="slide-wrapper"
                            v-for="workout in data.workout.workout"
                            :key="workout.id">
                            <div
                                @click="
                                    () => router.push('/workout/' + workout.id)
                                "
                                class="workout-card"
                                :style="
                                    'background-image: url(\'./assets/img/' +
                                    workout.id +
                                    '.jpg'
                                ">
                                <ion-text>
                                    <h4 class="ion-no-margin text-white">
                                        {{ workout.name }}
                                    </h4>
                                </ion-text>
                                <ion-text color="medium">
                                    <p class="ion-no-margin">
                                        <small>
                                            {{ workout.description }}
                                        </small>
                                    </p>
                                </ion-text>
                            </div>
                        </swiper-slide>
                    </swiper>
                </section>

                <ul class="footer-link">
                    <li>More</li>
                    <li>
                        <a @click="() => router.push('/about')">
                            <h2>About this app</h2>
                        </a>
                    </li>
                    <li>
                        <a @click="() => router.push('/about')">
                            <h2>Source code</h2>
                        </a>
                    </li>
                    <li>
                        <a @click="() => router.push('/about')">
                            <h2>Privacy</h2>
                        </a>
                    </li>
                    <li>
                        <a @click="() => router.push('/about')">
                            <h2>Install</h2>
                        </a>
                    </li>
                </ul>
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
} from '@ionic/vue'
import { informationCircleOutline, logoGithub } from 'ionicons/icons'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

import { useDataStore } from '@/stores/data'

import InstallBanner from './components/InstallBanner.vue'

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
        InstallBanner,
    },
    setup() {
        const data: any = useDataStore()
        const router = useRouter()
        return {
            informationCircleOutline,
            logoGithub,
            data,
            router,
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
.title {
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: -0.5px;
}

.welcome {
    margin-top: 1rem;
    margin-bottom: 0rem;
    width: 50%;
    padding: 1rem;
}
.slide-wrapper {
    display: inline-block;
    width: auto;
}
.workout-card {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 500px;
    height: 500px;
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    cursor: pointer;
}

.footer-link {
    list-style-type: none;
    margin: 0 0 2rem 0;
    padding: 0 0 0 1rem;
}

.footer-link li a {
    cursor: pointer;
    color: var(--ion-color-dark);
}

@media screen and (max-width: 500px) {
    .workout-card {
        width: 300px;
        height: 300px;
    }

    .welcome {
        width: 100%;
    }
}
</style>
