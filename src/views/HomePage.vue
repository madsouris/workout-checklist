<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <section class="content">
        <section class="ion-text-center ion-padding">
          <ion-img src="assets/img/Banner.svg"></ion-img>
          <ion-text>
            <h1>
              Workout
            </h1>
          </ion-text>
          <ion-text color="secondary">
            <p class="ion-no-margin">
              What are planning to work on today?
            </p>
          </ion-text>
        </section>
        <section>
          <ion-list>
            <ion-item button router-link="/workout">
              <ion-icon :icon="bodyOutline" slot="start" color="primary"></ion-icon>
              <ion-label>
                Arms & shoulders focus
                <p>
                  Also added more workouts to balanace
                </p>
              </ion-label>
            </ion-item>
          </ion-list>
        </section>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {IonContent, IonPage, IonImg, IonText, IonList, IonItem, IonLabel, IonIcon} from "@ionic/vue";
import {bodyOutline} from "ionicons/icons"
import {defineComponent} from "vue";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonPage,
    IonImg, IonText, IonList, IonItem, IonLabel, IonIcon

  },
  setup() {
    return {
      bodyOutline
    }
  }
});
</script>
