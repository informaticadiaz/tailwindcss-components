import React from 'react'
import ReactDOM from 'react-dom/client'
import { CarritoProvider } from './cart/Cart.tsx'

import App from './App.tsx'
import './index.css'

import Router from './router/Router'

const router = createHashRouter(Router)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CarritoProvider>
      <App />
    </CarritoProvider>
  </React.StrictMode>,
)
