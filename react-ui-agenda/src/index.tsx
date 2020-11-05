import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';

console.log('Initial state: ' , store.getState());

const unsubscribe = store.subscribe(() => 
  console.log('State after dispath: ', store.getState())  
);

store.dispatch({ type: ''})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);
