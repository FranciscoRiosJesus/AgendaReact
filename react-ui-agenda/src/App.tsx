import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Agenda from './features/agenda/agendaEvento/Agenda';
import { fetchAgendasExp } from './API';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

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

  const listEvent = () => {

  }

  const listAlarmas = () => {

  }

  const classes = useStyles();
  return (
    <div className="App">
      <h1>AGENDA</h1>
      <div className={classes.root}>
        <Button variant="contained" color="primary" className="start" onClick={filtros}>
          Filtros
        </Button >
      
        <Button variant="contained" color="primary"  className="filtros" onClick={anadirEvento}>
          Anadir Evento
        </Button>
        <Button variant="contained" color="primary"  className="anadirEvento" onClick={listEvent}>
          Lista de eventos
        </Button>
        <Button variant="contained" color="primary"  className="anadirEvento" onClick={listAlarmas}>
          Lista de alarmas
        </Button>
      </div>
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
