import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx';

// Require Sass file so webpack can build it
import 'bootstrap/dist/css/bootstrap.css';
import'./styles/style.scss';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));