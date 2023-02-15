import { ref } from 'vue';

export const useTodoList = () => {
  // ローカルストレージから値を取り出して、ls変数に格納している
  const ls = localStorage.todoList;
  // 入力された値を配列として保持するための変数
  const todoListRef = ref([]);
  // lsがnullでない場合は、todoListRefに値をセットする。nullの場合は、空の配列をセットする
  todoListRef.value = ls ? JSON.parse(ls) : [];

  // 新規登録の際の処理
  const add = (task) => {
    // 配列にはidが必要なので、登録した際の時間をIDにする
    const id = new Date();
    // 配列として保持するための変数todoListRefに下記のような形で、から配列にpushしている
    // idには上記の現在の時間を入れて、taskには入力された値を入れている
    todoListRef.value.push({ id: id, task: task, checked: false });
    // ローカルストレージにJSONの形で上記の配列を格納している
    localStorage.todoList = JSON.stringify(todoListRef.value);
  };

  // TodoリストからID情報を元にして、TODO情報を取得している
  const findById = (id) => {
    return todoListRef.value.find((todo) => todo.id === id);
  };

  // TodoリストからIdを元にして、そのインデックスを取得している
  const findIndexById = (id) => {
    return todoListRef.value.findIndex((todo) => todo.id === id);
  };

  // 編集ボタンが押された際の処理
  const editId = ref(-1);
  const show = (id) => {
    const todo = findById(id);
    editId.value = id;
    return todo.task;
  };

  // 更新ボタンが押された際の処理
  const edit = (task) => {
    const todo = findById(editId.value);
    const idx = findIndexById(editId.value);
    todo.task = task;

    todoListRef.value.splice(idx, 1, todo);

    localStorage.todoList = JSON.stringify(todoListRef.value);

    editId.value = -1;
  };

  // 削除時の処理
  const del = (id) => {
    const todo = findById(id);

    const delMsg = `${todo.task}を削除しますか？`;
    // もしユーザーが確認ボタンをキャンセルしたらここで関数を終了させる
    if (!confirm(delMsg)) return;

    const idx = findIndexById(id);

    // todoListRefの配列から、上記で選択したインデックス番号の値を取り除く。第一引数に、取り除くindex番号、第二引数にいくつ取り除くかを記載している
    todoListRef.value.splice(idx, 1);
    // 削除されたtodoListをローカルストレージにJSON形式で保存する
    localStorage.todoList = JSON.stringify(todoListRef.value);
  };

  const check = (id) => {
    const todo = findById(id);
    const idx = findIndexById(id);

    todo.checked = !todo.checked;
    todoListRef.value.splice(idx, 1, todo);
    localStorage.todoList = JSON.stringify(todoListRef.value);
  };

  return { todoListRef, add, show, edit, del, check };
};
