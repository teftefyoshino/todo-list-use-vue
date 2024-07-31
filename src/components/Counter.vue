<script lang="ts">
import {Ref} from "vue";
import { useLogger } from "../plugin/logger";

export interface ICounter {
  count: Ref<number>
}
</script>

<script setup lang="ts">
import {reactive} from "vue";

const log = useLogger();
const props = defineProps<{ counter: ICounter }>();

const counter = reactive(props.counter)
const onclick = () => {
  log.info('info log');
  log.debug(`debug log: before count ${counter.count}`);
  counter.count++
  log.warn(`warn log: after count ${counter.count}`);
  log.error(`error log`);
}

</script>

<template>
    <div class="card">
      <button type="button" @click="onclick">count is {{ counter.count }}</button>
      <p>
        Edit test25
        <code>components/Counter.vue</code> to test HMR
      </p>
    </div>
  </template>
