<template>
    <ion-header>
        <ion-toolbar>
            <ion-title>How to install</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding ion-text-center">
        <p>1. While on the site, hit share button</p>
        <ion-img src="@/../assets/img/install1.jpeg" alt="figure 1"></ion-img>
        <p>2. Hit add to homescreen</p>
        <ion-img src="@/../assets/img/install2.jpeg" alt="figure 1"></ion-img>
    </ion-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { IonHeader, IonToolbar, IonTitle, IonContent, IonImg } from '@ionic/vue'

export default defineComponent({
    name: 'InstallInstruction',
    components: {
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonImg,
    },
})
</script>

<style scoped></style>
