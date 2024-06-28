import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

// Punto de entrada de la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Renderizamos el componente App */}
  </React.StrictMode>,
)
