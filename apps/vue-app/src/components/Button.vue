<script setup lang="ts">
import { ref } from 'vue';
import { isEven } from 'shared-utils';
import 'sf-components';

function createCounter() {
  const count = ref(0);
  const increment = () => {
    count.value++;
  };
  const decrement = () => {
    count.value--;
  };
  return { count, increment, decrement };
}

const { count, increment, decrement } = createCounter();
</script>

<template>
  <div class="{{isEven(count) ? 'even' : 'odd'}}">
    <sf-button></sf-button>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <p>Count is: {{ count }}</p>
    <p>Count is {{ isEven(count) ? 'even' : 'odd' }}</p>
  </div>
</template>

<style scoped>
.even {
  color: lightblue;
  background-color: #333;
}
.odd {
  color: lightcoral;
  background-color: #333;
}
</style>
