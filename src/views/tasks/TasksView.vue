<script setup>
import { ref } from "vue";

import BaseInput from "@/components/input/BaseInput.vue";
import BaseButton from "@/components/buttons/BaseButton.vue";
import BaseDropdown from "@/components/dropdown/BaseDropdown.vue";
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
      <BaseButton class="base-button" label="Adicionar Tarefa" />
    </div>
    <div class="tasks flex justify-center">
      <div class="to-do">
        <h1 class="base-title">Para fazer</h1>
        <div class="to-do-card">
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            autem doloribus architecto dignissimos iure accusamus neque nobis
            suscipit alias nemo aliquid dolores, dolore hic tempora iusto
            sapiente? Incidunt, cum quis!
          </p>
        </div>
      </div>
      <div class="completed">
        <h1 class="base-title">Concluídas</h1>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top {
  gap: 1rem;
  justify-content: flex-start;
  width: 100%;
}

.tasks {
  width: 100%;
  gap: 40px;
  margin-top: 50px;
  justify-content: space-around;

  .to-do,
  .completed {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .to-do {
    margin-right: 1px solid rgba(0, 0, 0, 0.22);
  }

  .completed {
    border-left: 2px solid rgba(0, 0, 0, 0.256);
  }
}

.page-background {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}
</style>
