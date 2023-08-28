import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Global } from './global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Global />
    <App />
  </>
)
