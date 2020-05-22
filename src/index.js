import React from 'react';
import ReactDOM from 'react-dom';

import Framework from './Pages/Framework.js'
import {BreakpointProvider} from './Pages/useBreakpoint.js'

const queries = {
  xs: '(max-width: 320px)',
  md: '(max-width: 720px)',
  lg: '(max-width: 1024px)'
}

ReactDOM.render(
  <React.StrictMode>
    <BreakpointProvider queries={queries}>
      <Framework/>
    </BreakpointProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
