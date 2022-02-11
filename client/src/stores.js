import { writable } from "svelte/store";

export const SidebarStore = writable({
  isOpen: true,
});
