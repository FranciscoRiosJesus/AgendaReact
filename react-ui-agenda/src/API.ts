import { AgendaExp } from './components/Agenda';

export const fetchAgendasExp = async () => {
    const endPoint = `https://localhost:8080/test/api/eventos`;
    const data = await (await fetch(endPoint)).json();
    console.log(data);
    return data.results.map((agendaExp: AgendaExp) => (
        {
            ...agendaExp,

        }
    ));
}