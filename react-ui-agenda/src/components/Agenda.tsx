import React from 'react';
import { EnumType } from 'typescript';
import { TipoEventoAgenda } from '../Utils';
import Calendar from 'react-calendar';

type Props = {
    //TODO CREATE MODEL AGENDA EXP
    id: number;
    /* fechaInicioEvento: Date;
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
    /* fechaInicioEvento,
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
                    1
                </div>
            ))}
        </div>
    </div>
);


export default Agenda;