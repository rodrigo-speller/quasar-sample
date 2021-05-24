<template>
  <q-btn v-if="canInstall" color="white" text-color="black" @click="install">Install</q-btn>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import installer from 'src/services/InstallerService'

@Component
export default class InstallButton extends Vue {

  static get canInstall() {
    return installer.canInstall;
  }

  get canInstall() {
    return installer.canInstall;
  }

  async install() {
    await installer.install();
  }

}
</script>
