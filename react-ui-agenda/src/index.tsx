import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import { TipoEventoAgenda } from './features/agenda/agendaEvento/agendaSlice';

console.log('Initial state: ' , store.getState());

const unsubscribe = store.subscribe(() => 
  console.log('State after dispath: ', store.getState())  
);

store.dispatch({ type: 'agendaExp/agendaExpAdded', payload: 
  {   
    id: 2 , 
    fechaInicioEvento: new Date() , 
    fechaFinEvento: new Date() , 
    diaCompleto: true , 
    descripcion: 'description2' ,
    expedienteId: 0 ,
    documentoExpId: 0 ,
    tipoEventoAgenda: TipoEventoAgenda.CODIGO_TIPO_ACTIVIDAD,
    actuacionExpIdList: [0,1] ,
    expedienteFusionId: 0,
  }
});

unsubscribe();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);
