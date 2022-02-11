<script>
  import FaArrowRight from "svelte-icons/fa/FaArrowRight.svelte";

  let isOpen = true;

  const handleToggle = () => {
    isOpen = !isOpen;
  };
</script>

<div class={`sidebar ${!isOpen && "open"}`}>
  <div on:click={handleToggle} class="toggle">
    <FaArrowRight />
  </div>
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
    transition: 0.5s ease-in-out;
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
    border-radius: 5px 0 0 5px;
  }
  .sidebar.open {
    transform: translateX(-200px);
  }
  .sidebar.open .toggle {
    transform: rotate(0deg);
    border-radius: 0 5px 5px 0;
  }
</style>
