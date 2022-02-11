<script>
  import FaArrowRight from "svelte-icons/fa/FaArrowRight.svelte";
  import { fade } from "svelte/transition";
  import { SidebarStore } from "../stores";

  $: isOpen = $SidebarStore.isOpen;

  const handleToggle = () => {
    SidebarStore.update((current) => {
      return { isOpen: !current.isOpen };
    });
  };
</script>

<div class={`sidebar ${isOpen && "open"}`}>
  <div on:click={handleToggle} class="toggle">
    <FaArrowRight />
  </div>

  {#if isOpen}
    <h2 transition:fade class="logo">Invoice Management App</h2>
  {/if}

  <div class="menu-list" />
</div>

<style>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    background: var(--c-complementary);
    padding: 20px;
    transition: 0.5s ease-in-out;
    transform: translateX(-200px);
  }
  .sidebar .logo {
    color: var(--c-accent);
    text-align: center;
  }
  .sidebar .toggle {
    position: absolute;
    right: -40px;
    top: 20px;
    height: 40px;
    background: var(--c-accent);
    color: var(--c-complementary);
    padding: 5px;
    cursor: pointer;
    transform: rotate(0deg);
    transition: 0.5s ease;
    border-radius: 0 5px 5px 0;
  }
  .sidebar.open {
    transform: translateX(0px);
  }
  .sidebar.open .toggle {
    transform: rotate(180deg);
    border-radius: 5px 0 0 5px;
  }
</style>
