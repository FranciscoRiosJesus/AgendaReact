import React from 'react'
import { useSelector } from 'react-redux'
import EventoListItem from './eventoListItem';
import { AppThunk, RootState } from '../../../app/store';



const selectEventoIds = (state: RootState) => state.eventos.eventos.map(evento => evento.id);

const TodoList = () => {
  const eventos = useSelector(selectEventoIds)

  const renderedListItems = eventos.map(eventoIds => {
    return <EventoListItem key={eventoIds} id={eventoIds} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
