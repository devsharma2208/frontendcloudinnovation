import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import MainRoutes from './Pages/MainRoutes';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainRoutes />
      </Router>
    </Provider>
  );
}

export default App;
