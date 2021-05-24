<template>
  <span class="__connection-status-container" :class="{ online: isOnline, offline: !isOnline }">
    <div class="__connection-status online">
      <q-badge color="green" rounded class="q-mr-sm" />Online
    </div>
    <div class="__connection-status offline">
      <q-badge color="grey" rounded class="q-mr-sm" />Offline
    </div>
  </span>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import connection from 'src/services/ConnectionObserver'

@Component
export default class ConnectionStatusBadge extends Vue {

  static get isOnline() {
    return connection.isOnline;
  }

  get isOnline() {
    return connection.isOnline;
  }

}
</script>

<style lang="scss" scoped>

.__connection-status-container {
  display: grid;
  .__connection-status {
    grid-area: 1 / 1;
  }

  &.online .__connection-status.offline,
  &.offline .__connection-status.online {
    visibility: hidden;
  }
}

</style>
