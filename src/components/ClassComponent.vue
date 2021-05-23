<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="increment">
        {{ todo.id }} - {{ todo.content }}
      </li>
    </ul>
    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ count }}</p>
    <p>Offline: {{ isOffline }}</p>
    <p>Updated: {{ isUpdated }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Todo, Meta } from './models';
import worker from 'src/services/ServiceWorkerController';
import connection from 'src/services/ConnectionObserver';
import counter from 'src/services/CounterService';

// setInterval(() => counter.increment(), 1000);

@Component
export default class ClassComponent extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: Array, default: () => [] }) readonly todos!: Todo[];
  @Prop({ type: Object, required: true }) readonly meta!: Meta;
  @Prop(Boolean) readonly active!: boolean;

  increment() {
    counter.increment();
  }

  get count() {
    return counter.count;
  }

  get isOffline() {
    return connection.isOffline;
  }

  get isUpdated() {
    return worker.isUpdated;
  }

  get todoCount() {
    return this.todos.length;
  }
}
</script>
