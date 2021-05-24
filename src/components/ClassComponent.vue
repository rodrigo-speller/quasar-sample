<template>
  <q-card flat bordered>

    <q-card-section class="bg-grey-1">
      <div class="text-h6">{{ title }}</div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <ul>
        <li v-for="todo in todos" :key="todo.id" @click="increment">
          {{ todo.id }} - {{ todo.content }}
        </li>
      </ul>
    </q-card-section>

    <q-separator />

    <q-card-section class="bg-grey-1">
      <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
      <p>Active: {{ active ? 'yes' : 'no' }}</p>
      <p>Clicks on todos: {{ count }}</p>
    </q-card-section>

  </q-card>

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Todo, Meta } from './models';
import counter from 'src/services/CounterService';

// setInterval(() => counter.increment(), 1000);

@Component
export default class ClassComponent extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: Array, default: () => [] }) readonly todos!: Todo[];
  @Prop({ type: Object, required: true }) readonly meta!: Meta;
  @Prop(Boolean) readonly active!: boolean;

  localStorageValue: string = '';

  increment() {
    counter.increment();
  }

  get count() {
    return counter.count;
  }

  get todoCount() {
    return this.todos.length;
  }
}
</script>
