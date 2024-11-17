import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { Provider } from 'react-redux';
import { store } from 'src/app/store';
import App from './App';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
  </Provider>,
)