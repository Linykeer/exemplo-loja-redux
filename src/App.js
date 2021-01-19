import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import './config/reactotronConfig';
import GlobalStyle from './styles/global'
import Header from './components/Header';

import { ToastContainer } from 'react-toastify';

import history from './services/history';
import { Provider } from 'react-redux'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={2000}/>
      </Router>
    </Provider>
  )
}

export default App;
