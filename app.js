let state = {
  todos: [
    {
      id: 0,
      task: 'laundry',
      completed: false,
    },
    {
      id: 1,
      task: 'clean room',
      completed: true,
    },
    {
      id: 2,
      task: 'groceries',
      completed: false,
    },
  ],
};

const getters = {
  getTodos: state => state.todos,
};

const mutations = {
  ADD_TODO: (state, { task, id }) => {
    let newTask = {
      id,
      task,
      completed: false,
    };
  },
  TOGGLE_TODO: (state, payload) => {
    let item = state.todos.find(todo => todo.id === payload);

    item.completed = !item.completed;
  },
  DELETE_TODO: ({ todos }, payload) => {
    let index = todos.findIndex(todo => todo.id === payload);
    todos.splice(index, 1);
  },
};