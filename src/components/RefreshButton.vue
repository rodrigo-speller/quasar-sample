<template>
  <q-btn flat round icon="refresh" @click="refresh">
    <q-tooltip content-style="font-size: 1em; text-align: center">Refresh</q-tooltip>
  </q-btn>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import worker from 'src/services/ServiceWorkerController';

@Component
export default class RefreshButton extends Vue {

  static get isUpdated() {
    return worker.isUpdated;
  }

  get isUpdated() {
    return worker.isUpdated;
  }

  async refresh() {
    location.reload();
  }

}
</script>
