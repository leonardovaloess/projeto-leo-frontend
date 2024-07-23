<script setup></script>

<template>
  <header>
    <img src="../assets/img/png/logo2-removebg-preview.png" alt="" />
    <div>
      <RouterLink to="/register" class="link poppins-medium"
        >Cadastre-se</RouterLink
      >
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  display: flex;
  padding: 10px 36px;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  img {
    width: 140px;
  }

  .link {
    color: #407bff;
    text-decoration: none;
    font-weight: 400;
    letter-spacing: 3px;
    font-size: 20px;
  }
}

button {
  background-color: red;
  color: #fff;
  padding: 0.4rem;
  border-radius: 7px;
  cursor: pointer;
}
</style>
