import { StrictMode } from 'react'                  
import { createRoot } from 'react-dom/client'      
import './output.css'                               // Global styles
import App from './App.jsx'                         
import { Provider } from "react-redux"             // Makes Redux store available
import { store } from './store/index.js'           // Redux store

// Attach React app to the root div
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
