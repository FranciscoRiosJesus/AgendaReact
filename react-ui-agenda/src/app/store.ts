import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import agendaEventoReducer from '../features/agenda/agendaEvento/agendaEventoSlice';
import eventoReducer from '../features/agenda/evento/eventoSlice';

export const store = configureStore({
  reducer: {
    //TODO CAMBIAR POR agendaEvento
    agendaEventos: agendaEventoReducer,
    eventos: eventoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;