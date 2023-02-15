<script setup>
import { ref } from 'vue';
import { useTodoList } from '../composables/useTodoList';
// 入力した値を保持するための変数
const todoRef = ref('');
// 変更ボタンを押した際にfalseにする
const isEditRef = ref(false);

const { todoListRef, add, show, edit, del, check } = useTodoList();

// Todoリストを登録するための関数
const addTodo = () => {
  add(todoRef.value);
  todoRef.value = '';
};

// 編集ボタンを押した際の処理
const showTodo = (id) => {
  todoRef.value = show(id);
  isEditRef.value = true;
};

// 編集用関数
const editTodo = () => {
  edit(todoRef.value);

  isEditRef.value = false;

  todoRef.value = '';
};

// 削除関数
const deleteTodo = (id) => {
  del(id);
};

const changeCheck = (id) => {
  check(id);
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
    <button class="btn" @click="editTodo" v-show="isEditRef">変更する</button>
    <button class="btn" @click="addTodo" v-show="!isEditRef">追加する</button>
  </div>
  <div class="todo-list-title">タスク一覧</div>
  <div class="box-list">
    <div class="todo-list" v-for="todo in todoListRef" :key="todo.id">
      <div class="todo" :class="{ fin: todo.checked }">
        <input
          type="checkbox"
          class="check"
          @change="changeCheck(todo.id)"
          :checked="todo.checked"
        /><label>{{ todo.task }}</label>
      </div>
      <div class="outer-btn">
        <button class="edit" @click="showTodo(todo.id)">編集</button>
        <button class="delete" @click="deleteTodo(todo.id)">削除</button>
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

.fin {
  text-decoration: line-through;
  background-color: blueviolet;
  color: #777;
}
</style>
