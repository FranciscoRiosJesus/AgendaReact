import React from 'react'
import { useSelector } from 'react-redux'
/* import EventoListItem from './eventoListItem';  */
import { AppThunk, RootState } from '../../../app/store';



const selectEventos = (state: RootState) => state.evento;

const TodoList = () => {
  const eventos = useSelector(selectEventos)

  const renderedListItems = eventos.map(evento => {
    return <TodoListItem key={evento.id} evento={evento} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
