<script setup>
import {ref, onMounted, computed} from 'vue'
import ToDo from './ToDo.vue';


    const todos = ref([]);

    const universityTasks = computed(() => {
      return todos.value.filter((todo) => todo.category === 'university');
    });

    onMounted(() => {
      todos.value = JSON.parse(localStorage.getItem('todos') || '')
      console.log(todos.value)
    });


</script>

<template>
    <div>
      <h3 class="task-header">University Tasks</h3>
      <div v-for="todo in universityTasks" :key="todo.createdAt" class="task-item">
        {{ todo.content }}
      </div>
    </div>
  </template>

<style scoped>
.task-header {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333; 
}

.task-item {
  padding: 8px;
  margin-bottom: 8px;
  background-color: #f9f9f9; 
  border: 1px solid #ddd; 
  border-radius: 5px;
}
</style>