// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// import { hydrate } from 'react-dom';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import { hydrate } from 'react-dom';
import App from './App.jsx'


hydrate(<App />, document.getElementById('root'));