<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import BaseAlertError from "@/components/Alert/BaseAlertError.vue";
import { watch } from "vue";

const authStore = useAuthStore();
const { registerUser } = authStore;

const error = ref(false);
const router = useRouter();
const disabled = ref(true);

const passwordConfirm = ref("");
const payload = ref({
  name: "",
  email: "",
  password: "",
});

const handleSubmit = async () => {
  if (payload.value.password !== passwordConfirm.value) {
    error.value = true;
    setTimeout(() => {
      error.value = false;
    }, 3000);
    return;
  }

  const login = await registerUser(payload.value);

  if (login) {
    localStorage.setItem("token-auth", login.token);
    localStorage.setItem("user_id", login.user.id);

    router.push({ path: "/home" });
  } else {
    error.value = true;

    setTimeout(() => {
      error.value = false;
    }, 3000);
  }
};

watch(payload.value, () => {
  if (
    payload.value.email.length > 1 &&
    payload.value.password.length > 1 &&
    payload.value.name.length > 1
  ) {
    disabled.value = false;
  } else {
    disabled.value = true;
  }
});
</script>

<template>
  <div class="flex login-view-container">
    <div class="form-container">
      <div class="flex column form">
        <h1 class="poppins-medium">Cadastre-se</h1>
        <div class="flex column input-container">
          <label>Nome de Usuário</label>
          <input
            type="text"
            placeholder="Insira seu nome de usuário"
            :value="payload.name"
            @input="(ev) => (payload.name = ev.target.value)"
          />
        </div>
        <div class="flex column input-container">
          <label>Email</label>
          <input
            type="email"
            placeholder="Insira seu email"
            :value="payload.email"
            @input="(ev) => (payload.email = ev.target.value)"
          />
        </div>
        <div class="flex column input-container">
          <label>Senha</label>
          <input
            type="password"
            placeholder="Crie sua senha"
            :value="payload.password"
            @input="(ev) => (payload.password = ev.target.value)"
          />
        </div>
        <div class="flex column input-container">
          <label>Confirme sua senha</label>
          <input
            type="password"
            placeholder="Crie sua senha"
            :value="passwordConfirm"
            @input="(ev) => (passwordConfirm = ev.target.value)"
          />
        </div>
        <button
          @click="handleSubmit"
          :class="disabled === true ? 'disabled' : ''"
          :disabled="disabled"
        >
          Entrar
        </button>
        <span>
          Tem uma conta?
          <RouterLink class="login-span-text" to="/login"
            >Faça seu login</RouterLink
          >
        </span>
        <BaseAlertError
          v-if="error"
          type="error"
          text="As senhas não coincidem"
        />
      </div>
    </div>
    <div class="theme">
      <img src="../../assets/img/png/5559852.jpg" alt="theme" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.disabled {
  opacity: 0.6;
}

.password-span-text {
  color: blue;
  text-align: end;
  text-decoration: none;
  margin-left: 2px;
}
.login-span-text {
  color: blue;
  text-align: left;
  text-decoration: none;
}
.login-view-container {
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme {
  width: 50%;
  background-color: black;
  img {
    width: 100%;
    opacity: 0.6;
    height: 100vh;
    object-fit: cover;
  }
}
.form-container {
  width: 50%;
  padding: 2rem;

  .form {
    gap: 0.8rem;
    width: 500px;
    margin: auto;
    h1 {
      text-align: center;
      font-size: 55px;
    }
    .input-container {
      gap: 0.3rem;
      input {
        padding: 0.7rem;
        border-radius: 8px;
        border: 1px solid #24242475;
      }
    }

    button {
      background-color: #407bff;
      color: #fff;
      padding: 0.7rem;
      border: 1px solid rgba(83, 83, 83, 0.219);
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
    }

    @media (max-width: 1110px) {
      width: 90%;
    }
  }
}
@media (min-width: 0px) and (max-width: 850px) {
  .theme {
    display: none;
  }

  .form-container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
