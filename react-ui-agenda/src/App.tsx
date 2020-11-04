import React, {useState} from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Agenda from './components/Agenda';
import { fetchAgendasExp } from './API';
import { Console } from 'console';

const App = () => {

  //MOCKS
  const id = 1;
  const actuacionExpIdList = [
    1,
    2,
  ]
  const fechaInicioEvento = new Date();

  console.log(fetchAgendasExp());

  //FUNCIONS
  const startAgenda = async () => {

  }

  const anadirEvento = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const filtros = () => {

  }


  return (
    <div className="App">
      <h1>AGENDA</h1>
      <ButtonBase className="start" onClick={startAgenda}>
        Start
      </ButtonBase>
      <ButtonBase className="filtros" onClick={filtros}>
        Filtros
      </ButtonBase>
      <ButtonBase className="anadirEvento" onClick={anadirEvento}>
        Anadir Evento
      </ButtonBase>
      <p>Agenda de la Oficina</p>
      <Agenda 
        id={id}
        fechaInicioEvento={fechaInicioEvento}
        actuacionExpIdList={actuacionExpIdList}
      ></Agenda>
    </div>
  );
}

export default App;
