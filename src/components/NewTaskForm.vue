<script>
import { useThemeStore } from '@/stores/themeStore';
export default {
  data() {
    return {
      form: {
        input_content: '',
        input_category: null,
        done: false,
        createdAt: null,
      },
    };
  },
  methods: {
    async addToDo() {
      if (this.form.input_content.trim() === '' || this.form.input_category === null) {
        return;
      }

      this.$emit('add-todo', this.form);

      this.form.input_content = '';
      this.form.input_category = null;
    },
  },
  setup() {
        const themeStore = useThemeStore();
        return {
        isDarkTheme: themeStore.currentTheme === 'dark',
        }
    },
};
</script>

<template>
    <section :class="['create-todo', isDarkTheme ? 'dark-theme' : 'light-theme', 'p-4', 'border', 'border-gray-300']">
      <h3 class="text-2xl font-semibold mb-4">Create a To Do task</h3>
  
      <form @submit.prevent="addToDo">
  
        <input
          type="text"
          placeholder="Add your to do"
          v-model="form.input_content"
          :class="['w-full', 'px-4', 'py-2', 'mb-4', 'rounded-md', 'border', 'border-gray-300', 'focus:outline-none', 'text-lg']"
        />
  
        <div class="flex gap-4 mb-4">
          <label class="category flex items-center">
            <input
              type="radio"
              name="category"
              id="categ1"
              value="university"
              v-model="form.input_category"
              class="mr-2"
            />
            University
          </label>
  
          <label class="category flex items-center">
            <input
              type="radio"
              name="category"
              id="categ2"
              value="personal"
              v-model="form.input_category"
              class="mr-2"
            />
            Personal
          </label>
        </div>
  
        <input
          type="submit"
          value="Add ToDo"
          :class="{
            'bg-blue-500 hover:bg-blue-600': form.input_category === 'university',
            'bg-red-500 hover:bg-red-600': form.input_category === 'personal',
          }"
          class="w-full text-white px-4 py-2 rounded-md cursor-pointer text-lg bg-green-500"
        
        />
      </form>
    </section>
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
  

  