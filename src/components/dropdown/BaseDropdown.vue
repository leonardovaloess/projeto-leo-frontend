<script setup>
import { ref } from "vue";

const props = defineProps({
  label: String,
  customCLick: Function,
});

const openDrop = ref(false);
</script>

<template>
  <div>
    <button @click="openDrop = !openDrop">
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
  {{ openDrop }}
  <div class="options" v-if="openDrop">
    <v-slot></v-slot>
  </div>
</template>

<style scoped lang="scss">
button {
  padding: 0.3rem 1rem;
  background-color: #1a4fc0;
  border-radius: 8px;
  color: #fff;

  &:hover {
    background-color: #0b2b71;
    transition: 0.3s;
  }
}

.options {
  background-color: #f4f4f4;
  width: 200px;
  height: 200px;
}
</style>
