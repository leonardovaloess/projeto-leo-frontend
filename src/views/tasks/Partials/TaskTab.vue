<script>
export default {
  data: () => ({
    tab: null,
  }),
};
</script>

<template>
  <v-tabs v-model="tab" bg-color="" class="tabs">
    <v-tab value="to-do" class="tab"> Para fazer</v-tab>
    <v-tab value="completed" class="tab">Concluídas</v-tab>
  </v-tabs>

  <v-card-text>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="to-do" class="window">
        <div class="card">
          <h2 class="card-title">Hello</h2>

          <div class="flex">
            <v-checkbox class="btn" color="success" hide-details></v-checkbox>
          </div>
        </div>
      </v-tabs-window-item>

      <v-tabs-window-item value="completed" class="window">
        <div class="card completed">
          <h2 class="card-title">Criar campanhas de desenvolvimento</h2>

          <div class="flex">
            <v-checkbox
              class="btn"
              :value="true"
              :disabled="true"
              color="success"
              hide-details
            ></v-checkbox>
          </div>
        </div>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card-text>
</template>

<style scoped lang="scss">
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
      font-size: 12px;
    }
    width: 100%;
    padding: 2px 10px;
  }
}

.completed {
  background-color: rgb(202, 250, 202);
  border: 2px solid rgb(108, 187, 108);

  h2 {
    text-decoration: line-through;
  }
}
</style>
