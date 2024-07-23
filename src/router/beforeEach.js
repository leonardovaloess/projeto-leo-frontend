export default async (to) => {
  //document.title = `${to.name} - TCE PR`;

  const token = localStorage.getItem("token-auth");

  if (to.name === "login" && token) {
    return { path: `/home/logado` };
  }

  if (to.path === "/" && token) {
    return { path: `` };
  }

  if (to.meta.requiresAuth) {
    if (!token) {
      return { name: "login" };
    }

    return true;
  }

  return true;
};
