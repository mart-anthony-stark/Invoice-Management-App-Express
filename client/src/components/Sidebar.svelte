<script>
  import FaArrowRight from "svelte-icons/fa/FaArrowRight.svelte";

  let isOpen = false;
</script>

<div class="sidebar">
  <div class={`toggle ${!isOpen && "open"}`}><FaArrowRight /></div>
  <h2 class="logo">Invoice Management App</h2>
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
    transform: rotate(180deg);
    cursor: pointer;
    transition: 0.5s ease;
  }
  .sidebar .toggle.open {
    transform: rotate(0deg);
  }
</style>
