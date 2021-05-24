<template>
  <q-card flat bordered>
    <q-card-section class="bg-grey-1">
      <div class="text-h6">Post Message Test</div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div>
        Input some message to post.
        <q-input label="Some text" placeholder="Input some message here" v-model="message" />
      </div>
    </q-card-section>

    <q-card-actions class="bg-grey-1">
      <q-btn flat @click="message = ''">Clear input</q-btn>
      <q-space />
      <q-btn flat @click="sendMessage">Send</q-btn>
    </q-card-actions>

    <q-separator />

    <q-card-section class="q-px-none q-pb-none">
      <div class="q-mx-md">Received messages:</div>
      <div class="q-pa-md" style="max-height: 100px; min-height: 120px; overflow-y: auto;">
        <q-card v-for="message in receivedMessages" :key="message.id" class="q-pa-xs q-my-sm">
          {{message.message}}
        </q-card>
      </div>
    </q-card-section>

  </q-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

const MESSAGE_TYPE = 'sample.message';
const ORIGIN = location.origin;

@Component
export default class PostMessageCard extends Vue {

  message: string = '';

  receivedmessageId = 1;
  receivedMessages: { id: number, message: string } [] = [];

  private messageListener: (e: MessageEvent) => void = (e) => {
    if (e.origin !== ORIGIN || e.data?.type !== MESSAGE_TYPE) {
      return;
    }

    const id = this.receivedmessageId++,
          message = e.data.message;

    this.receivedMessages.unshift({ id, message });
  }

  created() {
    addEventListener("message", this.messageListener);
  }

  beforeDestroy() {
    removeEventListener("message", this.messageListener);
  }

  sendMessage() {
    const message = this.message.trim();

    if (!message)
      return;

    postMessage({ type: MESSAGE_TYPE, message }, '*')
  }

}
</script>
