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
        <q-item-label header class="text-grey-8">Essential Links</q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

import { Vue, Component } from 'vue-property-decorator';
import ConnectionStatusBadge from 'components/ConnectionStatusBadge.vue'
import InstallButton from 'components/InstallButton.vue'
import RefreshButton from 'components/RefreshButton.vue'

@Component({
  components: { EssentialLink, ConnectionStatusBadge, InstallButton, RefreshButton }
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
  essentialLinks = linksData;

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
