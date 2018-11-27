import {ADD_TODO, LIKE_TODO, DELETE_TODO, GET_TODOS} from './actions';

const initialState = {
  todos: [],
  error: '',
  isLoading: true
};

// reducer - это фукнция, которая возвращает новые объекты
function homeReducer(state = initialState, action) {
    const todos = state.todos;
    switch (action.type){
        case ADD_TODO:
            if (!action.error){
                todos.push({id: action.id, name: action.name, liked: false});
            };
            return Object.assign({},state,{
                error: action.error,
                todos: todos
            });
        case LIKE_TODO:
            const  idx = todos.findIndex( todo => todo.id === action.todo.id);
            todos[idx].liked = action.liked;
            return Object.assign({},state,{
                todos: todos
            });
        case DELETE_TODO:
            const  todos2 = state.todos.filter(todo => todo.id !== action.todo.id);
            return Object.assign({},state,{
                todos: todos2
            });
        case GET_TODOS:
             return Object.assign({},state, {
                todos: action.todos,
                isLoading: false
            });
        default:
            return state;
    }

}

const HomeReducer = {
  home: homeReducer
};

export default HomeReducer;