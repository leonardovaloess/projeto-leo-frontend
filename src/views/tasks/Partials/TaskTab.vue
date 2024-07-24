<script setup>
import { ref } from "vue";
import { useTaskStore } from "@/stores/tasks";
import { onMounted, watch } from "vue";
const taskStore = useTaskStore();
const { getTasks, toggleTaskStatus } = taskStore;

const tasks = ref([]);
const completedTasks = ref([]);
const tab = ref(null);

const initFunction = async () => {
  tasks.value = await getTasks();
};

onMounted(async () => {
  await initFunction();
  console.log(tasks.value);
});
</script>

<template>
  <v-tabs v-model="tab" bg-color="" class="tabs">
    <v-tab value="to-do" class="tab"> Para fazer</v-tab>
    <v-tab value="completed" class="tab">Concluídas</v-tab>
  </v-tabs>

  <v-card-text class="teste">
    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="to-do" class="window">
        <div class="tasks-list">
          <div v-for="task in tasks" :key="task.id" class="card">
            <h2 class="card-title">{{ task.title }}</h2>
            <div class="flex">
              <v-checkbox
                class="btn"
                color="success"
                hide-details
                @click="toggleTaskStatus(task.id)"
              ></v-checkbox>
            </div>
          </div>
        </div>
      </v-tabs-window-item>

      <v-tabs-window-item value="completed" class="window">
        <div class="tasks-list">
          <div
            v-for="task in completedTasks"
            :key="task.id"
            class="card completed"
          >
            <h2 class="card-title">{{ task.title }}</h2>
            <div class="flex">
              <v-checkbox
                class="btn"
                color="success"
                hide-details
                @click="toggleTaskStatus(task.id)"
              ></v-checkbox>
            </div>
          </div>
        </div>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card-text>
</template>

<style scoped lang="scss">
.teste {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.tasks-list {
  max-height: 500px;
  overflow-y: auto;
}

.tabs {
  border: none !important;
}

.tab {
  border: none !important;
  color: rgb(104, 104, 104);
  font-family: "poppins", sans-serif !important;
}

.card {
  border: 2px solid rgb(180, 180, 180);
  padding: 7px 20px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: 1rem;
  overflow-x: auto;

  h2 {
    color: rgb(85, 85, 85);
    font-weight: 500;
  }
  .btn {
    border-radius: 30px;
  }

  @media (max-width: 630px) {
    h2 {
      font-size: 15px;
    }

    & {
      width: 100%;
      padding: 0px 10px;
    }
  }
}
.window {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.completed {
  background-color: rgb(202, 250, 202);
  border: 2px solid rgb(108, 187, 108);

  h2 {
    text-decoration: line-through;
  }
}
</style>
