<script setup>
import { ref } from 'vue';
// 入力した値を保持するための変数
const todoRef = ref('');
// 入力された値を配列として保持するための変数
const todoListRef = ref([]);
// ローカルストレージから値を取り出して、ls変数に格納している
const ls = localStorage.todoList;
// lsがnullでない場合は、todoListRefに値をセットする。nullの場合は、空の配列をセットする
todoListRef.value = ls ? JSON.parse(ls) : [];

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
  <div class="todo-list-title">タスク一覧</div>
  <div class="box-list">
    <div class="todo-list" v-for="todo in todoListRef" :key="todo.id">
      <div class="todo">
        <input type="checkbox" class="check" /><label>{{ todo.task }}</label>
      </div>
      <div class="outer-btn">
        <div class="edit">編集</div>
        <div class="delete">削除</div>
      </div>
    </div>
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

.todo-list-title {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
}

.box-list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.todo-list {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.todo {
  border: 1px solid brown;
  padding: 12px;
  width: 300px;
}

.check {
  border: 1px solid red;
  transform: scale(1.6);
  margin: 0px 16px 2px 6px;
}

.outer-btn {
  margin-left: 20px;
  display: flex;
  width: 200px;
}

.edit {
  margin-right: 10px;
  background-color: blue;
  color: white;
  border-radius: 20px;
  padding: 10px;
  display: inline;
}

.delete {
  display: inline;
  background-color: red;
  color: white;
  border-radius: 20px;
  padding: 10px;
}
</style>
