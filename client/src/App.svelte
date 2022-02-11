<script>
  import Sidebar from "./components/Sidebar.svelte";
  import { onMount } from "svelte";
  import Router, { link } from "svelte-spa-router";
  import { routes } from "./routes";
  import { SidebarStore } from "./stores";

  onMount(() => {
    console.log("Hello");
  });
</script>

<main>
  <Sidebar />
  <section class={`main ${$SidebarStore.isOpen && "open"}`}>
    <a href="/dashboard" use:link>Next</a>
    <Router {routes} />
  </section>
</main>

<style>
  main {
    min-height: 100vh;
    background: var(--c-pri);
  }
  section.main {
    margin-left: 165px;
    transition: 1s ease-in-out;
  }
  section.main.open {
    margin-left: 350px;
  }
</style>
