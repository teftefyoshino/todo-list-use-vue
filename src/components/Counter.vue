<script lang="ts">
import {Ref} from "vue";

export interface ICounter {
  count: Ref<number>
}
</script>

<script setup lang="ts">
import {reactive} from "vue";

const props = defineProps<{ counter: ICounter }>();
const counter = reactive(props.counter)

</script>

<template>
    <div class="card">
      <button type="button" @click="counter.count++">count is {{ counter.count }}</button>
      <p>
        Edit
        <code>components/Counter.vue</code> to test HMR
      </p>
    </div>
  </template>
