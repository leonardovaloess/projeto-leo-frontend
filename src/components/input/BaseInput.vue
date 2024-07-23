<script setup>
const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
});
</script>

<template>
  <div classs="container flex column">
    <label>{{ props.label }}</label>

    <div class="input">
      <input
        :type="passwordInput"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  gap: 0.3rem;
}

input {
  border-radius: 8px;
  padding: 0.2rem;
  border: 2px solid #24242475;
  width: 100%;
}
</style>
