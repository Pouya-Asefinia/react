import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
var ghpages = require('gh-pages');
ghpages.publish('dist', {
  branch: 'main',
  repo: 'https://github.com/Pouya-Asefinia/Shopping_cart.git'
}, callback);

import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </StrictMode>,
)
