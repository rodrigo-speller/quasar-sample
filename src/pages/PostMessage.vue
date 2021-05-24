<template>
  <q-page class="row items-center justify-evenly">
    <PostMessageCard />
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PostMessageCard from 'components/PostMessageCard.vue';

@Component({ components: { PostMessageCard } })
export default class PostMessagePage extends Vue {

}
</script>
