import { defineStore } from "pinia";
import api from "@/api";

export const useTaskStore = defineStore("task", () => {
  async function getTasks() {
    try {
      const response = await api.task.getTasks();

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function toggleTaskStatus(task_id) {
    try {
      await api.task.toggleTaskStatus(task_id);
      await getTasks();
    } catch (error) {
      console.log(error);
    }
  }

  return {
    getTasks,
    toggleTaskStatus,
  };
});
