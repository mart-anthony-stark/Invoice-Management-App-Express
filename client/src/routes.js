import Home from "./pages/Home.svelte";
import Auth from "./pages/Auth.svelte";

const routes = {
  "/": Home,
  "/dashboard": Home,
  "/auth": Auth,
};

export { routes };
