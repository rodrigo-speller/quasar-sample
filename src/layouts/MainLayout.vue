<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- Drawer button -->
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />
        <!-- Title -->
        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        <!-- Connection Status -->
        <ConnectionStatusBadge class="q-mx-sm connection-status-container" />
        <!-- "Refresh" button -->
        <RefreshButton v-if="canRefresh" />
        <!-- "Install" button -->
        <InstallButton v-if="canInstall" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">Quasar App</q-item-label>
        <EssentialLink v-for="link in menuLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';
import MenuLinks from './MenuLinks.json';

import { Vue, Component } from 'vue-property-decorator';
import ConnectionStatusBadge from 'components/ConnectionStatusBadge.vue'
import InstallButton from 'components/InstallButton.vue'
import RefreshButton from 'components/RefreshButton.vue'

@Component({
  components: { EssentialLink, ConnectionStatusBadge, InstallButton, RefreshButton }
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
  menuLinks = MenuLinks;

  get isOnline() {
    return ConnectionStatusBadge.isOnline;
  }

  get canInstall() {
    return InstallButton.canInstall && this.isOnline;
  }

  get canRefresh() {
    return RefreshButton.isUpdated && this.isOnline;
  }
}

</script>
