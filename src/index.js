import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AboutMe } from './components/AboutMe/AboutMe.jsx';
import { Header } from './components/Header.jsx';
import { Projects } from './components/Projects/Projects.jsx';
import { Contact } from './components/Contact/Contact.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <AboutMe />
    <Projects />
    <Contact />
  </React.StrictMode>
);
