<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const { userLogout } = authStore
const router = useRouter()

const handleLogout = async () => {
  await userLogout()

  localStorage.removeItem("token-auth")
  localStorage.removeItem("user_id")

  router.push({path: "/login"})
}

</script>

<template>
  <header>
    <div>
      <h1>Olá {{ user.name }}</h1>
    </div>
    <button @click="handleLogout">Logout</button>

  </header>
</template>

<style scoped>
header {
  background-color: rgb(233, 233, 233);
  border-bottom: 1px solid rgba(77, 77, 77, 0.192);
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

button{
  background-color: red;
  color: #fff;
  padding: 0.4rem;
  border-radius: 7px;
  cursor: pointer;
}
</style>
