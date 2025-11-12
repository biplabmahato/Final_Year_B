import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Auth0Provider } from '@auth0/auth0-react';


createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-cojggvhi8r3hiyo3.us.auth0.com"
    clientId="QcdBY8avYDCt1JP1HBHV5ICGtlpg343O"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"   // 👈 persist session across refresh
  >
    <App />
  </Auth0Provider>
)
