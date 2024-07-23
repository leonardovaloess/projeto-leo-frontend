<script setup>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseSidebar from "./sidebar/BaseSidebar.vue";
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
    <BaseSidebar class="sidebar" />

    <main :class="`main `">
      <BaseHeader class="header" />
      <div class="base-padding">
        <div class="background">
          <router-view />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.page-background {
  display: flex;
  position: relative;
}

.sidebar {
  position: sticky;
  left: 0;
  top: 0;
  z-index: 9999;
  box-shadow: 10px 0px 105px rgba(0, 0, 0, 0.267);
}

.base-padding {
  background-color: #d4d4d4;
  padding: 2rem;
  height: 90%;
}

.header {
  position: sticky;
  top: 0;
  height: 10%;
  right: 0;
  z-index: 999;
}
.main {
  transition: all ease-in-out 0.4s;
  height: 100vh;
  width: 100%;
}
.page {
  margin-left: 200px;
}

.background {
  background-color: #fff;
  border-radius: 10px;
  height: 100%;
}
@media (min-width: 0px) and (max-width: 768px) {
  .page {
    margin-left: 0px;
  }
}
</style>
