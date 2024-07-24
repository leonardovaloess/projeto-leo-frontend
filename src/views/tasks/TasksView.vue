<script setup>
import { ref } from "vue";

import BaseInput from "@/components/input/BaseInput.vue";
import BaseButton from "@/components/buttons/BaseButton.vue";
import BaseDropdown from "@/components/dropdown/BaseDropdown.vue";
import CreateEditTaskModal from "./Partials/CreateEditTaskModal.vue";
import TaskTab from "./Partials/TaskTab.vue";

const openModal = ref(false);
const createModal = ref(true);
const search = ref(null);
</script>

<template>
  <div class="page-background">
    <div class="top flex align-center">
      <BaseInput
        class="base-input"
        v-model="search"
        placeholder="Buscar Tarefa..."
      />
      <BaseButton
        class="base-button"
        label="Adicionar Tarefa"
        @click="openModal = !openModal"
      />
    </div>
    <div class="tasks">
      {{ completedTasks }}
      <TaskTab :to-do-arr="tasks" :-completed-array="completedTasks" />
    </div>
    <CreateEditTaskModal
      :open="openModal"
      @update:open="openModal = $event"
      :create="createModal"
    />
  </div>
</template>

<style scoped lang="scss">
.top {
  gap: 1rem;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;

  .base-input {
    flex: content;
  }
  @media (max-width: 630px) {
    gap: 1rem;
    padding: 15px;
    .base-button {
      width: 100%;
    }
  }
}

.tasks {
  width: 100%;
  gap: 40px;
  margin-top: 50px;
  justify-content: space-around;
  flex: 1;
  @media (max-width: 630px) {
    margin-top: 20px;
  }
}

.page-background {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  height: 100%;
  @media (max-width: 630px) {
    padding: 1rem;
  }
}
</style>
