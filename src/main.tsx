import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css' // <--- CSS Import
import { BrowserRouter } from 'react-router-dom' // <--- IMPORT THIS

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* <--- WRAP APP HERE */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)