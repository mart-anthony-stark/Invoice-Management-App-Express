<script>
  import Sidebar from "./components/Sidebar.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
</script>

<main>
  <Sidebar />
  <section class="main"></section>
</main>

<style>
  main {
    min-height: 100vh;
    background: var(--c-pri);
  }
  section.main {
    margin-left: 300px;
  }
</style>
