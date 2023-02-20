<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Privacy</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large"> Privacy </ion-title>
                </ion-toolbar>
            </ion-header>
            <section class="content ion-padding">
                <ion-text>
                    <p>
                        This website (workout.vannrith.com) does not use any analytics software and neither third-party
                        scripts. I don't know
                        who you are, where you're coming from and I don't want to.
                    </p>
                </ion-text>
                <ion-text>
                    <h1>What I collect</h1>
                </ion-text>
                <ion-text color="medium">
                    <p>
                        Nothing.
                    </p>
                </ion-text>
                <ion-text>
                    <h1>Outside links</h1>
                </ion-text>
                <ion-text color="medium">
                    <p>
                        When you leave Workout Checklist via my links, I cannot vouch for the tracking or cookies used
                        by sites I recommend,
                        however I recommend you use an ads blocker such as uBlock Origin.
                    </p>
                </ion-text>
                <ion-text>
                    <h1>This app is hosted on Netlify</h1>
                </ion-text>
                <ion-text color="medium">
                    <p>
                        Netlify has their own privacy policy, please read it <a href="https://www.netlify.com/privacy"
                            target="_ban
                        ">Here</a>
                    </p>
                </ion-text>
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
    IonText,
} from '@ionic/vue'

import { useDataStore } from '@/stores/data'

export default defineComponent({
    name: 'PrivacyPage',
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonTitle,
        IonContent,
        IonText,
    },
    data() {
        return {}
    },
    setup() {
        //calculating loading time
        const t0 = performance.now()
        //define data store
        const data: any = useDataStore()
        //test data
        console.log(data.workout.app)
        const t1 = performance.now()
        //displaying loading time
        console.log(`load data took ${t1 - t0} milliseconds.`)

        return {
            data
        }
    },
})
</script>

<style scoped>

</style>
