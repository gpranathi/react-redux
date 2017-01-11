/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';

render(
  <Main></Main>,
  document.getElementById('app')
);
