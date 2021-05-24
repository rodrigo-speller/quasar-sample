<template>
  <q-btn flat round v-if="canInstall" icon="get_app" @click="install">
    <q-tooltip content-style="font-size: 1em; text-align: center">Install</q-tooltip>
  </q-btn>
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
