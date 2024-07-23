<script setup>
import BaseIndexHeader from "@/components/BaseIndexHeader.vue";
</script>

<template>
  <div class="header">
    <BaseIndexHeader class="headerIndex" />
  </div>
  <main>
    <div class="section section-1">
      <div class="left">
        <div class="text-box">
          <div>
            <h1>SMART LIST</h1>
            <p>
              A solução inteligente para você organizar sua rotina de forma
              prática e eficiente!!
            </p>
          </div>
          <router-link to="/login" class="button">
            <button>Já possui um cadastro? Faça login</button>
          </router-link>
        </div>
      </div>
      <div class="right">
        <img src="../assets/img/png/index1.png" alt="" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.section {
  display: flex;
}
.section-1 {
  align-items: center;
  justify-content: space-between;
  height: 700px;
  .left {
    width: 50%;
    height: 100%;
    display: flex;
    padding-top: 10rem;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    .text-box {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 40px;
      h1 {
        font-size: 70px;
        font-weight: 600;
        letter-spacing: 15px;
        color: #363636;
      }

      p {
        letter-spacing: 3px;
        color: #888888b7;
        font-weight: 500;
      }
    }

    .button {
      background-color: #407bff;
      color: #fff;
      padding: 12px;
      border-radius: 7px;
      box-shadow: 2px 5px 19px 10px #407cff57;
    }
  }

  .right {
    width: 50%;

    img {
      width: 90%;
    }
  }
}
</style>
