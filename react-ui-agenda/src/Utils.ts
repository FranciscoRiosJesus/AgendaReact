
export type AgendaExp = {
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

export enum TipoEventoAgenda {
    TIPO_EVENTO_AGENDA_SUBASTA,
    CODIGO_TIPO_ACTIVIDAD,
}

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

/* export default function agendaExpReducer(state = initialState, action) {
    switch (action.type) {
        case 'agendaExp/agendaExpAdded': {
            return {
                ...state,
                agendasExp: [
                    ...state.agendasExp,
                    {
                        id: nextAgendaId(state.agendasExp),
                        text:  
                    }
                ]
            }
        }
    }
} */
/*  
    {type: 'agendaExp/agendaExpAdded', payload: agenadaExp} 
    {type: 'agendaExp/agendaExpToggled', payload: agendaExpId}
    {type: 'agendaExp/agendaExpDeleted'. payload: agendaExpId}
    {type: 'filters/statusFilterChanged', payload: filterValue}
*/