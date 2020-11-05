export const hola = "Hola";

/* export default function rootReducer(state, action) {
    return {
        agendaExp: agendasExpReducer(state.agenadaExp, action),
    }
} */

/* export type AgendaExp = {
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
} */

/* export enum TipoEventoAgenda {
    TIPO_EVENTO_AGENDA_SUBASTA,
    CODIGO_TIPO_ACTIVIDAD,
} */



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