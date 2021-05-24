<template>
  <q-card flat bordered>
    <q-card-section class="bg-grey-1">
      <div class="text-h6">Local Storage Test</div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div>
        Input some text to test local storage.
        <q-input label="Some text" placeholder="Input some text here" v-model="localStorageValue" />
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions class="bg-grey-1">
      <q-btn flat @click="localStorageValue = ''">Clear input</q-btn>
      <q-space />
      <q-btn flat @click="load">Load</q-btn>
      <q-btn flat @click="save">Save</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class LocalStorageCard extends Vue {

  localStorageValue: string = '';

  save() {
    localStorage.setItem('some-text', this.localStorageValue);
  }

  load() {
    this.localStorageValue = localStorage.getItem('some-text') ?? '';
  }
}
</script>
