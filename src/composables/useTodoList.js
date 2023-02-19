// MainTodoで使用するReactでいうカスタムフックを作成している。
// ここで各処理を書くことで、ロジックを分離できる
import { ref, computed } from 'vue';

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
  // editIdの初期値を-1にしているのは、0でも良いのだが、idが０から始まる場合もあるため、-1というidはありえないので、存在することのない-1をidに設定している
  const editId = ref(-1);
  // 編集画面に詳細情報を反映させるための関数
  const show = (id) => {
    // 特定のTodo情報を取得して、todo変数に入れている
    const todo = findById(id);
    // 上記のeditIdにidを導入している
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

  // チェックをした場合の処理
  const check = (id) => {
    const todo = findById(id);
    const idx = findIndexById(id);

    todo.checked = !todo.checked;
    todoListRef.value.splice(idx, 1, todo);
    localStorage.todoList = JSON.stringify(todoListRef.value);
  };

  // チェックをした数を数える関数
  const countFin = computed(() => {
    // finArrという変数にデータが入った配列から、チェックをしてあるものだけを抜き出して、それを配列で返す。
    const finArr = todoListRef.value.filter((todo) => todo.checked);
    // 上記で抜き出した配列に対して、数を数えている
    return finArr.length;
  });

  return { todoListRef, add, show, edit, del, check, countFin };
};
