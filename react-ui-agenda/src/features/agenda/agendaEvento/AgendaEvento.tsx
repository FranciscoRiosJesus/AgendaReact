import React from 'react'

interface AgendaEvento {
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
	descripcion: number;
}