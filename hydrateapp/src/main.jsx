import React from 'react'
import ReactDOM from 'react-dom/client'
import { hydrate } from 'react-dom';
import App from './App.jsx'
import './index.css'

hydrate(<App />, document.getElementById('root'));
