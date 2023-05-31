import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Show from './pages/Show';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route index element={<Show />} />
      </Routes>
    </BrowserRouter>
);
