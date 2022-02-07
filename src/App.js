import React from 'react';
import { PromoVideo } from './pages/PromoVideo';
import { Home } from './pages/Home';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<PromoVideo />} />
        <Route path="/home" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
