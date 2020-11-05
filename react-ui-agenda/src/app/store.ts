import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import agendaReducer from '../components/AgendaSlice';

export const store = configureStore({
  reducer: {
    agendaExp: agendaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
