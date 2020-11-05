import { createSlice, PayloadAction } from '@reduxjs/toolkit';
/* import { AppThunk, RootState } from '../app/store'; */

//TODO MOVER A SU PROPIO MODELO
export enum TipoEventoAgenda {
    TIPO_EVENTO_AGENDA_SUBASTA,
    CODIGO_TIPO_ACTIVIDAD,
}

interface AgendasExp {
    id: number;
    fechaInicioEvento: Date;
    fechaFinEvento: Date;
    diaCompleto: boolean;
    descripcion: string;
    expedienteId: number;
    documentoExpId: number;
    tipoEventoAgenda: TipoEventoAgenda;  
    actuacionExpIdList: number[];
    expedienteFusionId: number;
  }

//TODO Debe castearce a AgendaExp y Filtros
const initialState = {
    agendasExp: [
        {   id: 0 , 
            fechaInicioEvento: new Date() , 
            fechaFinEvento: new Date() , 
            diaCompleto: true , 
            descripcion: 'description' ,
            expedienteId: 0 ,
            documentoExpId: 0 ,
            tipoEventoAgenda: TipoEventoAgenda.CODIGO_TIPO_ACTIVIDAD,
            actuacionExpIdList: [0,1] ,
            expedienteFusionId: 0,
        },
        {   id: 1 , 
            fechaInicioEvento: new Date() , 
            fechaFinEvento: new Date() , 
            diaCompleto: true , 
            descripcion: 'description' ,
            expedienteId: 0 ,
            documentoExpId: 0 ,
            tipoEventoAgenda: TipoEventoAgenda.CODIGO_TIPO_ACTIVIDAD,
            actuacionExpIdList: [0,1] ,
            expedienteFusionId: 0,
        },
    ],
    filtros : {
        estado : 'activo',
    }
}

export const AgendaSlice = createSlice({
    name: 'agendaExp',
    initialState,
    reducers: {
        added: (state, action: PayloadAction<AgendasExp>) => {
            state.agendasExp = [
                ...state.agendasExp,
                action.payload
            ];
        },
        toggled: (state, action: PayloadAction<AgendasExp>) => {
            state.agendasExp.map(agendaExp => {
                if (agendaExp.id !== action.payload.id) {
                    return agendaExp;
                }

                return {
                    ...agendaExp,
                    //TODO LO QUE SE QUIERA AGREGAR
                }
            })
        }
    },
});

export const { added } = AgendaSlice.actions;

export default AgendaSlice.reducer;