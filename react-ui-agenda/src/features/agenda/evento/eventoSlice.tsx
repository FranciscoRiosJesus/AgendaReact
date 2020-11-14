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

const initialState = {
    eventos: [
        {
            id: "0",
            title: "title",
            start: new Date(),
            end: new Date(),
            allDay: true,
            url: "url",
            className: "className",
            editable: true,
        },
        {
            id: "1",
            title: "title1",
            start: new Date(),
            end: new Date(),
            allDay: true,
            url: "url1",
            className: "className1",
            editable: true,
        },
    ]
        
}

export const eventoSlice = createSlice({
    name: 'evento',
    initialState,
    reducers: {
        eventoAdded: (state, action: PayloadAction<Evento>) => {
            state.eventos.map(evento => {
                if (evento.id !== action.payload.id) {
                    return evento;
                }

                return {
                    ...evento,
                }
            })
        },
        eventoToggled: (state, action: PayloadAction<Evento>) => {
            state.eventos.map(evento => {
                if (evento.id !== action.payload.id) {
                    return evento;
                }

                return {

                    ...evento,
                    //TODO LO QUE SE QUIERA AGREGAR
                }
            })
        }
    },
});

export const { eventoAdded,  eventoToggled } = eventoSlice.actions;

export const selectEvento = (state: RootState) => state.eventos;

export default eventoSlice.reducer;