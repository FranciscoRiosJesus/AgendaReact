import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import agendaReducer from '../features/agenda/agendaSlice';
import eventoReducer from '../features/agenda/eventoSlice';

export const store = configureStore({
  reducer: {
    //TODO CAMBIAR POR agendaEvento
    agendaExp: agendaReducer,
    evento: eventoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;