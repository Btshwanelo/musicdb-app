import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { appRoutes } from './shared/assets/routes';

function App() {
  return (
    <Routes>
      {appRoutes.map((route, index) => (
        <Route exact path={route.path} key={index} element={route.component} />
      ))}
    </Routes>
  );
}

export default App;
