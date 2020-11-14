import { Evento } from './features/agenda/evento/eventoSlice';

export const fetchEvento = async () => {
    const endPoint = `http://localhost:8080/test/api/agendas/eventos?expedienteId=1&oficinaId=0`;
    const data = await (await fetch(endPoint)).json();
    console.log(data);
    return data.results.map((evento: Evento) => (
        {
            ...evento,
        }
    ));
}