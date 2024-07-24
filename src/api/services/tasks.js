export default (httpClient) => ({
  getTasks: () => {
    return httpClient.get(`/tasks`);
  },
  toggleTaskStatus: (task_id) => {
    return httpClient.put(`toggle-task-status/${task_id}`, { done: true });
  },
});
