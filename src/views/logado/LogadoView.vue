<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<template>
  <div class="page-background">
    <h1>VOCÊ ESTÁ LOGADO</h1>

    <h1>Usuário: {{ user }}</h1>
  </div>
</template>

<style scoped>
#my-cal-inline {
  height: 100vh;
}
.page-background {
  display: flex;
  flex-direction: column;
}
.main {
  transition: all ease-in-out 0.4s;
  padding-top: 2rem;
}
.page {
  margin-left: 200px;
}
@media (min-width: 0px) and (max-width: 768px) {
  .page {
    margin-left: 0px;
  }
}
</style>
