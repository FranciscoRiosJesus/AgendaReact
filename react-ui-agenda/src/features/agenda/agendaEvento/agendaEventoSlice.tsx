import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../../app/store'; 

//TODO MOVER A SU PROPIO MODELO
export enum TipoEventoAgenda {
    TIPO_EVENTO_AGENDA_SUBASTA,
    CODIGO_TIPO_ACTIVIDAD,
}

export interface AgendasExp {
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

interface AgendaOficina {
    id: number;
    fechaInicioEvento: Date;
    fechaFinEvento: Date;
    diaCompleto: boolean;
    descripcion: string;
    idOficina: number;
    tipoEventoAgenda: TipoEventoAgenda;
    uuid: string;
    idExpediente: number; 
}

export interface AgendaEvento {
    id: number;
    idOficina: number;
    idExpediente: number;
    claveExpediente: string;
    fechaInicioEvento: Date;
    fechaFinEvento: Date;
    status: number;
    tipoEventoAgendaDTO: TipoEventoAgendaDTO;
    diaCompleto: boolean;
    descripcion: string;
    intervaloRepeticion: number;
    numeroVeces: number;
    tipoComputo: string;
    hora: string;
    duracion: number;
    avisoPrevio: boolean;
} 

interface TipoEventoAgendaDTO {
    id: number;
	codigo: number;
    descripcion: string;
    idAgendaExpList: Array<number>;
    idAgendaOficinaList: Array<number>;
}

//TODO Debe castearce a AgendaExp y Filtros
const initialState = {
    agendaEventos: [
        {   id: 0 , 
            idOficina: 0,
            idExpediente: 0,
            claveExpediente: 'claveExpediente',
            fechaInicioEvento: new Date() , 
            fechaFinEvento: new Date() , 
            status: 1,
            tipoEventoAgendaDTO: {
                id: 0,
                codigo: 0,
                descripcion: 'description',
                idAgendaExpList: [1],
                idAgendaOficinaList: [2],
            },
            diaCompleto: true , 
            descripcion: 'description' ,
            intervaloRepeticion: 0,
            numeroVeces: 1,
            tipoComputo: 'tipoComputo',
            hora: '00:01',
            duracion: 1,
            avisoPrevio: true,
        },
        {   id: 0 , 
            idOficina: 0,
            idExpediente: 0,
            claveExpediente: 'claveExpediente',
            fechaInicioEvento: new Date() , 
            fechaFinEvento: new Date() , 
            status: 1,
            tipoEventoAgendaDTO: {
                id: 0,
                codigo: 0,
                descripcion: 'description',                
                idAgendaExpList: [1],
                idAgendaOficinaList: [2],
            },
            diaCompleto: true , 
            descripcion: 'description' ,
            intervaloRepeticion: 0,
            numeroVeces: 1,
            tipoComputo: 'tipoComputo',
            hora: '00:01',
            duracion: 1,
            avisoPrevio: true,
        },
    ],
    filtros : {
        estado : 'activo',
    }
}

export const AgendaSlice = createSlice({
    name: 'agendaEvento',
    initialState,
    reducers: {
        added: (state, action: PayloadAction<AgendaEvento>) => {
            state.agendaEventos = [
                ...state.agendaEventos,
                action.payload
            ];
        },
        toggled: (state, action: PayloadAction<AgendaEvento>) => {
            state.agendaEventos.map(agendaEvento => {
                if (agendaEvento.id !== action.payload.id) {
                    return agendaEvento;
                }

                return {

                    ...agendaEvento,
                    //TODO LO QUE SE QUIERA AGREGAR
                }
            })
        }
    },
});

export const { added } = AgendaSlice.actions;

export const selectEventos = (state: RootState) => state.agendaEventos;

export default AgendaSlice.reducer;

