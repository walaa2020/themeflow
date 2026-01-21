
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouterProvider } from './providers/AppRouterProvider.jsx'
import { store } from './store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
createRoot(document.getElementById('root')).render(
<Provider store={store}>
     <AppRouterProvider/>
</Provider>
)
