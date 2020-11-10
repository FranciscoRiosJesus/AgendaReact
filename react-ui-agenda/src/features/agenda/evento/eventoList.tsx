import React from 'react'
import { useSelector } from 'react-redux'
/* import EventoListItem from './eventoListItem';  */
import { AppThunk, RootState } from '../../app/store';



const selectTodos = state => state.todos

const TodoList = () => {
  const todos = useSelector(selectTodos)

  // since `todos` is an array, we can loop over it
  const renderedListItems = todos.map(todo => {
    return <TodoListItem key={todo.id} todo={todo} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
