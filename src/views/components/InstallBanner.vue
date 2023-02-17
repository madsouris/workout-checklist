<template>
    <section>
        <ion-text> <b>Add to homescreen</b> </ion-text>
        <div>
            <ion-button color="dark" fill="outline" size="small">
                <ion-icon :icon="arrowDownOutline"></ion-icon>
                Install
            </ion-button>
            <ion-button size="small" fill="clear" color="dark">
                Dismiss
            </ion-button>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { IonText, IonButton, IonIcon } from '@ionic/vue'
import { arrowDownOutline } from 'ionicons/icons'

export default defineComponent({
    name: 'InstallBanner',
    components: {
        IonText,
        IonButton,
        IonIcon,
    },
    setup() {
        return {
            arrowDownOutline,
        }
    },
})
</script>

<style scoped>
section {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: var(--ion-color-light);
}
</style>
