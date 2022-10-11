<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-back-button></ion-back-button>
				</ion-buttons>
				<ion-title> Workout </ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true"> </ion-content>
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
	},
});
</script>
