import React from 'react';
import Calendar from "react-calendar";
import { TipoEventoAgenda } from './agendaEventoSlice'; 
import 'react-calendar/dist/Calendar.css';

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

type Props = {
    //TODO CREATE MODEL AGENDA EXP
    id: number;
    fechaInicioEvento: Date;/* 
    fechaFinEvento: Date;
    diaCompleto: boolean;
    descripcion: String;
    expedienteId: number;
    documentoExpId: number; */
    //TODO HACER ENUM
    /* tipoEventoAgenda: TipoEventoAgenda;  */ 
    actuacionExpIdList: Array<number>;/* 
    expedienteFusionId: number; */
}

const Agenda: React.FC<Props> = ({
    id,
    fechaInicioEvento,/*
    fechaFinEvento,
    diaCompleto,
    descripcion,
    expedienteId,
    documentoExpId,
    tipoEventoAgenda, */
    actuacionExpIdList,
    /* expedienteFusionId, */
}) => (
    <div>
        <p className="number">
            id: {id}
        </p>
        <div>
            {actuacionExpIdList.map(actuacionExpId => (
                <div>
                    {actuacionExpId}
                </div>
            ))}
            <Calendar />
        </div>
    </div>
);


export default Agenda;