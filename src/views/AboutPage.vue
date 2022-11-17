<template>
 <ion-page>
  <ion-header :translucent="true">
   <ion-toolbar>
    <ion-buttons slot="start">
     <ion-back-button></ion-back-button>
    </ion-buttons>
    <ion-title>About</ion-title>
   </ion-toolbar>
  </ion-header>
  <ion-content :fullscreen="true">
   <ion-header collapse="condense">
    <ion-toolbar>
     <ion-title size="large"> About page </ion-title>
    </ion-toolbar>
   </ion-header>
   <section class="content ion-padding">
    <ion-text>
     <h1>
      About this app
     </h1>
    </ion-text>
    <ion-text color="medium">

     <p>
      This app was created for personal workout routines by me, <a href="//github.com/madsouris"
       target="blank">@madsouris</a>. This is still an early development, as I am still learning Javascript, Vue and
      Ionic framework.
     </p>
     <p>
      In the near future, I want this app to be more dynamic, meaning people can come in sign in, create their own
      routines, everything is stored in the cloud somewhere, and being able to share their routines.
     </p>

    </ion-text>
    <ion-text>
     <h1>
      Licensing and collaboration
     </h1>
    </ion-text>
    <ion-text color="medium">
     <p>
      This app is open source, and will remain so. The goal is to improve my own skills by creating something that I
      would use and could be useful for other people.
     </p>
     <p>
      If somehow, magically, you found this app, want to help improving, feel free to create PR in Github repo.
     </p>
    </ion-text>
    <ion-text>
     <h1>
      Find @madsouris
     </h1>
    </ion-text>
    <ion-text color="medium">
     <p>
      You can find me on:
     </p>
    </ion-text>
    <ion-button shape="round" color="primary" @click="goTo('https://github.com/madsouris')">
     <ion-icon :icon="logoGithub" slot="start"></ion-icon>
     Github
    </ion-button>
    <ion-button color="dark" shape="round" @click="goTo('https://instagram.com/madsouris')">
     <ion-icon :icon="logoInstagram" slot="start"></ion-icon>
     Instagram
    </ion-button>
    <ion-button shape="round" color="dark" @click="goTo('https://twitter.com/madsouris')">
     <ion-icon :icon="logoTwitter" slot="start"></ion-icon>
     Twitter
    </ion-button>
    <ion-button fill="clear" color="dark" @click="goTo('https://vannrith.com')">
     <ion-icon :icon="globeOutline" slot="start"></ion-icon>
     Website
    </ion-button>


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
 IonText, IonButton, IonIcon
} from '@ionic/vue'
import { logoGithub, logoInstagram, logoTwitter, globeOutline } from 'ionicons/icons'

export default defineComponent({
 name: 'AboutPage',
 components: {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonText, IonButton, IonIcon
 },
 data() {
  return {
  }
 },
 methods: {
  goTo(link: string) {
   window.open(link);
  }
 },
 setup() {
  return {
   logoGithub, logoInstagram, logoTwitter, globeOutline
  }
 }
})
</script>

<style scoped>

</style>
