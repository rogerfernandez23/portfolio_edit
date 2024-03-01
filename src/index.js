/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom/client';

import Footer from './components/Footer';
import Main from './pages/Main';
import Second from './pages/Second';
import Third from './pages/Third';
import GlobalStyles from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles />
    <Main />
    <Second />
    <Third />
    <Footer />
  </>
);
