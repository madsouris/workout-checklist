<template>
    <ion-app>
        <ion-router-outlet />
    </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',
    components: {
        IonApp,
        IonRouterOutlet,
    },
})
</script>

<style>
ion-toolbar {
    --border-color: transparent;
}
ion-content section.content {
    max-width: 850px;
    margin: 0 auto !important;
}
</style>
