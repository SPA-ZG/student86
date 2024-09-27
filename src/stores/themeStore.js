import { defineStore } from 'pinia'

export const useThemeStore = defineStore({
    id: 'theme',
  state: () => ({
    currentTheme: 'light', 
  }),
  getters: {
    themeClasses() {
      return this.currentTheme === 'dark' ? 'dark-theme' : 'light-theme';
    },
  },
  actions: {
    toggleTheme() {
      this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    },
  },
})

export function setupThemeStore() {
    return useThemeStore();
}