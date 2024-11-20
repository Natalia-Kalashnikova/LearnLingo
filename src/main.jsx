import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store.js';
import App from './components/App/App.jsx';
import './index.css';
import '../src/services/firebase.js';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/LearnLingo">
          <App />
        </BrowserRouter>
      </PersistGate>
      <ToastContainer />
    </Provider>
  </StrictMode>
);



