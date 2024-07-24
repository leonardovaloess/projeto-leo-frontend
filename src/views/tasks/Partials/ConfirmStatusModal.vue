<script setup>
import BaseButton from "@/components/buttons/BaseButton.vue";
import BaseInput from "@/components/input/BaseInput.vue";
import BaseModal from "@/components/modal/BaseModal.vue";
import { ref } from "vue";
import { defineProps, defineEmits, watch } from "vue";

const props = defineProps({
  open: Boolean,
  taskId: String,
  create: Boolean,
});

const emit = defineEmits(["update:open"]);

const close = ref(props.open);

watch(
  () => props.open,
  (newVal) => {
    close.value = newVal;
  }
);

const handleClose = () => {
  close.value = false;
  emit("update:open", false);
};
</script>

<template>
  <BaseModal :open="close" :closeIcon="true">
    <template v-slot:header>
      <div class="header">
        <h1>Deseja marcar esta Tarefa como concluída?</h1>
      </div>
    </template>

    <template v-slot:footer>
      <div class="footer flex gap-1">
        <BaseButton class="cancel" label="Cancelar" @click="handleClose" />
        <BaseButton label="Sim" />
      </div>
    </template>
  </BaseModal>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 25px;
    width: 100%;
    color: rgb(73, 73, 73) !important;
    text-align: center;
  }
}

.body {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer {
  margin-top: 25px;
  align-items: center;
  justify-content: center;
}

.cancel {
  background-color: rgb(252, 31, 31);
}
</style>
