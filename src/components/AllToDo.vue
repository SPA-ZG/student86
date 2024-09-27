<script setup>
import { ref, onMounted, computed, watch} from 'vue'
import ToDo from './ToDo.vue';
import NewTaskForm from './NewTaskForm.vue';
import { useThemeStore } from '@/stores/themeStore';

const todos = ref([])
const name = ref('')


const addToDo = (form) => {

  todos.value.push({
    content: form.input_content,
    category: form.input_category,
    done: false,
    createdAt: new Date().getTime()
  })

}

const removeToDo = todo => {
  todos.value = todos.value.filter(t => t !== todo)
}

watch(todos, newValue => {
  localStorage.setItem('todos', JSON.stringify(newValue))
}, {deep: true})

onMounted(() => {
  todos.value = JSON.parse(localStorage.getItem('todos') || '')
  console.log(todos.value)
})

const todos_ascending = computed((() => todos.value.sort((a,b) => {
  return b.createdAt - a.createdAt
})))

watch(
  () => useThemeStore().currentTheme,
  (newValue) => {
    isDarkTheme.value = newValue === 'dark';
  }
);

const themeStore = useThemeStore()
const isDarkTheme = ref(themeStore.currentTheme === 'dark')

const toggleTheme = () => {
  themeStore.toggleTheme()

  console.log(themeStore.currentTheme)
}

</script>

<template>
  <main :class="[isDarkTheme ? 'dark-theme' : 'light-theme', 'app', 'min-h-screen', 'p-4']">
    <section class="heading text-center">
      <h2 class="text-4xl font-bold mb-4">
        To Do List!
      </h2>
      <button @click="toggleTheme" class="text-lg px-4 py-2 rounded-md bg-green-500 text-white hover:bg-blue-600">
        Toggle Theme
      </button>
    </section>

    <NewTaskForm @add-todo="addToDo" />

    <section>
      <h3 class="text-2xl font-semibold mb-2">TO DO LIST:</h3>
      <div class="grid gap-4">
        <ToDo
          v-for="todo in todos_ascending"
          :key="todo.createdAt"
          :todo="todo"
          @remove-todo="removeToDo"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.dark-theme {
    background-color: #1a1a1a; 
    color: #ffffff; 
}
  
.light-theme {
    background-color: #ffffff; 
    color: #333333; 
}
</style>