import Demo from "App/Demo";
import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import 'Styles/root.scss';
import reportWebVitals from './reportWebVitals';


render(
  <StrictMode>
    {/* FIXME: Заменить на <App/> */}
    <Demo />
    {/* <App /> */}
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
