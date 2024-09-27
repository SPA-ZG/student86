<script>
import { useThemeStore } from '@/stores/themeStore';
export default {
    props: {
        todo: Object,
    },
    methods: {
        removeToDo() {
            this.$emit('remove-todo', this.todo);
        },
    },
    setup() {
        const themeStore = useThemeStore();
        return {
        isDarkTheme: themeStore.currentTheme === 'dark',
        }
    },
}
</script>

<template>
    <div :class="['flex', 'items-center', isDarkTheme ? 'dark-theme' : 'light-theme', todo.category
                , todo.category ]">
      <div>
        <label class="flex items-center">
          <input type="checkbox" v-model="todo.done" class="mr-2" />
          <span class="text-lg">{{ todo.category }}</span>
        </label>
      </div>
  
      <div :class="{ 'line-through': todo.done }" class="flex-grow text-lg">
        {{ todo.content }}
      </div>
  
      <div>
        <button @click="removeToDo(todo)" class="text-red-500 hover:text-red-700 text-lg">
          Delete
        </button>
      </div>
    </div>
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

.line-through {
    text-decoration: line-through;
  }

.university {
    border: 2px solid blue;
    border-radius: 5%;
}

.personal {
    border: 2px solid red;
    border-radius: 5%;
}
</style>
