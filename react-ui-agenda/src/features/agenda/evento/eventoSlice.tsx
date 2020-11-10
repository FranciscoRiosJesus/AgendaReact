import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../../app/store';

export interface Evento {
    id: string;
    title: string;
    start: Date;
    end: Date;
    allDay: boolean;
    url: string;
    className: String;
    editable: boolean;
}

const initialState: Evento = {
    id: "0",
    title: "title",
    start: new Date(),
    end: new Date(),
    allDay: true,
    url: "url",
    className: "className",
    editable: true,
}

export const eventoSlice = createSlice({
    name: 'evento',
    initialState,
    reducers: {
        added: (state, action: PayloadAction<Evento>) => {
            state.eventos.map(evento => {
                if (evento.id !== action.payload.id) {
                    return evento;
                }

                return {
                    ...evento,
                }
            })
        },
    },
});

export const { added } = eventoSlice.actions;

export const selectCount = (state: RootState) => state.evento.value;

export default eventoSlice.reducer;