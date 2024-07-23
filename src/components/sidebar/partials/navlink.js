import { ref } from "vue";

const links = ref([
  {
    label: "Home",
    opened: true,
    childreen: [
      {
        name: "Tarefas",
        path: "/home",
      },

      {
        name: "Quadro",
        path: "/home/board",
      },

      {
        name: "Tarefas Diárias",
        path: "/home/diary",
      },
      {
        name: "Modelos",
        path: "/home/diary",
      },
    ],
  },
  {
    label: "Usuário",
    opened: true,
    childreen: [
      {
        name: "Perfil",
        path: "/home/profile",
      },
    ],
  },
]);

export default links;
