<script>
  import Sidebar from "./components/Sidebar.svelte";
  import { Router, Link, Route } from "svelte-routing";
</script>

<main>
	<Sidebar />
	
</main>

<style>
  main {
    min-height: 100vh;
    background: var(--c-pri);
  }
</style>
