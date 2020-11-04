
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

}