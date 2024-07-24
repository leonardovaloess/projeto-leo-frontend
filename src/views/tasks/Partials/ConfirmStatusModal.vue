<script setup>
import BaseButton from "@/components/buttons/BaseButton.vue";
import BaseModal from "@/components/modal/BaseModal.vue";
import { useTaskStore } from "@/stores/tasks";
import { ref } from "vue";
import { defineProps, defineEmits, watch } from "vue";
import BaseAlertError from "@/components/Alert/BaseAlertError.vue";
import BaseAlertSuccess from "@/components/Alert/BaseAlertSuccess.vue";

const taskStore = useTaskStore();

const { toggleTaskStatus } = taskStore;

const error = ref(false);
const success = ref(false);

const props = defineProps({
  open: Boolean,
  taskId: String,
  create: Boolean,
});

const close = ref(props.open);

const emit = defineEmits(["update:open", "update:reload"]);

const handlePayload = async () => {
  const response = await toggleTaskStatus(props.taskId);
  console.log(response);
  if (response) {
    console.log("aqui 1");
    close.value = false;
    emit("update:open", false);
    emit("update:reload", true);

    success.value = true;

    setTimeout(() => {
      success.value = false;
    }, 3000);
  } else {
    error.value = true;

    setTimeout(() => {
      error.value = false;
    }, 3000);
  }
};

const handleClose = () => {
  close.value = false;
  emit("update:open", false);
};

watch(
  () => props.open,
  (newVal) => {
    close.value = newVal;
    emit("update:open", newVal);
  }
);
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
        <BaseButton label="Sim" @click="handlePayload" />
      </div>
    </template>
  </BaseModal>

  <BaseAlertError v-if="error" class="alert" :text="textError"></BaseAlertError>
  <BaseAlertSuccess
    v-if="success"
    class="alert"
    text="Tarefa concluída com sucesso"
  ></BaseAlertSuccess>
</template>

<style scoped lang="scss">
.alert {
  z-index: 99999 !important;
}

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
