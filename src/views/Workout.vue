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
        <h1>Workout here</h1>
        <ion-list>
          <ion-item>
            <ion-thumbnail slot="start">
              <ion-img src="http://placekitten.com/g/200/200"></ion-img>
            </ion-thumbnail>
            <ion-label>
              Workout one
              <p>x12</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </section>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
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
  IonImg,
  IonThumbnail,
} from "@ionic/vue";

export default defineComponent({
  name: "WorkoutPage",
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
    IonImg,
    IonThumbnail,
  },
});
</script>

<style scoped>
ion-thumbnail ion-img {
  border-radius: 0.5rem;
}
</style>
