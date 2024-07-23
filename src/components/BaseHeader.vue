<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const { userLogout } = authStore;
const router = useRouter();
</script>

<template>
  <header>
    <div>
      <h1>Olá {{ user.name }}</h1>
    </div>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  right: 0;
  background-color: #3674f8;
  color: #fff;
  border-bottom: 1px solid rgba(77, 77, 77, 0.192);
  width: 100%;
  height: 120px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

button {
  background-color: red;
  color: #fff;
  padding: 0.4rem;
  border-radius: 7px;
  cursor: pointer;
}
</style>
