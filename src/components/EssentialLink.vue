<template>
    <q-item clickable tag="a" :target="isExternal ? '_blank' : '_self'" :href="href">
      <q-item-section v-if="icon" avatar>
        <q-icon :name="icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <q-item-label caption>
          {{ caption }}
        </q-item-label>
      </q-item-section>
    </q-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

const regex = /https?:\/\//

@Component
export default class EssentialLink extends Vue {
  @Prop({ type: String, required: true })
  readonly title!: string;

  @Prop({ type: String, default: '' })
  readonly caption!: string;

  @Prop({ type: String, default: '#' })
  readonly link!: string;

  @Prop({ type: String, default: ''})
  readonly icon!: string;

  get isExternal() {
    return regex.test(this.link);
  }

  get href() {
    if (this.isExternal)
      return this.link;

    const route = this.$router.resolve(this.link);

    return route.href;
  }
}
</script>
