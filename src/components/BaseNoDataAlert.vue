<script setup>
const props = defineProps({
  title: String,
  text: String,
});
</script>

<template>
  <div class="container">
    <img src="../assets/img/png/no-data-rafiki.png" alt="" />
    <h1>{{ props.title }}</h1>
    <p>{{ props.text }}</p>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;

  img {
    width: 400px;
  }

  h1 {
    font-size: 34px;
  }
}
</style>
