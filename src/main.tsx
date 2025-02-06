import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './sass/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
