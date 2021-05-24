<template>
  <q-page class="row items-center justify-evenly">
    <LocalStorageCard />
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LocalStorageCard from 'components/LocalStorageCard.vue';

@Component({ components: { LocalStorageCard } })
export default class LocalStoragePage extends Vue {

}
</script>
