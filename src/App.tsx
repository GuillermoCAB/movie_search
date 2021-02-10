import Routes from './routes'
import GlobalStyles from './styles/GlobalStyles'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, Persistor } from './store'

// COMPONENTS
import Alert from './components/Alert'

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<div />} persistor={Persistor}>
          <GlobalStyles />
          <Alert />
          <Routes />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
