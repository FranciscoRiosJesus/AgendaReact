import React from 'react'
import { useSelector } from 'react-redux'


    
interface Evento {
    id: string;
    title: string;
    start: Date;
    end: Date;
    allDay: boolean;
    url: string;
    className: String;
    editable: boolean;
}

//TODO MOVER A SU RESPECTIVO .TSX
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