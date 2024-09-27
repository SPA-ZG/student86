<script setup>
import { provide } from 'vue';
import { useThemeStore, setupThemeStore } from '@/stores/themeStore';

setupThemeStore();
provide('themeStore', useThemeStore());
</script>

<template>
  <main>
    <router-view></router-view>
  </main>
</template>