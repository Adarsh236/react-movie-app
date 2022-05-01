import React from 'react';
import { Provider } from 'react-redux';
import Controller from './controller/controller';
import { store } from './redux/store/index';

const App: React.FC = () => (
  <Provider store={store}>
    <div className="App">
      <Controller />
    </div>
  </Provider>
);

export default App;
