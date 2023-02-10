<script setup>
import { ref } from 'vue';
// 入力した値を保持するための変数
const todoRef = ref('');
// 入力された値を配列として保持するための変数
const todoListRef = ref([]);

// Todoリストを登録するための関数
const addTodo = () => {
  // 配列にはidが必要なので、登録した際の時間をIDにする
  const id = new Date();
  // 配列として保持するための変数todoListRefに下記のような形で、から配列にpushしている
  todoListRef.value.push({ id: id, task: todoRef.value });
  // ローカルストレージにJSONの形で上記の配列を格納している
  localStorage.todoList = JSON.stringify(todoListRef.value);
  // 登録後に入力欄をからにする
  todoRef.value = '';
};
</script>

<template>
  <div class="box-input">
    <input
      type="text"
      class="todo-input"
      placeholder="入力してください"
      v-model="todoRef"
    />
    <button class="btn" @click="addTodo">追加する</button>
  </div>
</template>

<style scoped>
.box-input {
  display: flex;
  text-align: center;
  margin-top: 20px;
}

.todo-input {
  width: 300px;
  margin-right: 10px;
  padding: 8px;
  font-size: 18px;
  border: 1px solid red;
  border-radius: 10px;
}

.btn {
  width: 200px;
  padding: 8px;
  background-color: bisque;
  border-radius: 7px;
  color: blue;
  font-size: 14px;
}
</style>
