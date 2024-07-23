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
