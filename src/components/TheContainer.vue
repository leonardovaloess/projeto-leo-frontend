<script setup>
import BaseHeader from "@/components/BaseHeader.vue";
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const { userInfo } = authStore;

const loadUserInfos = async () => {
  const user_id = localStorage.getItem("user_id");
  await userInfo(user_id);
};

onMounted(async () => {
  await loadUserInfos();
});
</script>

<template>
  <div class="page-background">
    <BaseHeader />
    <main :class="`main `">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
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
