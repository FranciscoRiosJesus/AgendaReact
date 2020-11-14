import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppThunk, RootState } from '../../../app/store';
import { Evento } from './eventoSlice';

const selectTodoById = (state: RootState, idEvento: any) => {
  return state.eventos.eventos.find(evento => evento.id === idEvento);
}

const EventoListItem = ({ id } : {id:any}) => {
  const evento: Evento = useSelector(
    (state:RootState) => selectTodoById(state, id))!;
  const { start, end, allDay, url, className, editable } = evento;
  
  const dispatch = useDispatch()
  
  const handleCompletedChanged = () => {
    dispatch({ type: 'eventos/eventoToggled', payload: evento.id })
  }
  
  return (
    <li>
      <div className="view">{}</div>
    </li>
  )
}
  
export default EventoListItem;


