import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useGlobalContext } from './Components/utils/global.context';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Navbar from './Components/Navbar';
import Detail from './Routes/Detail';

const App = () => {
  const { state } = useGlobalContext();

  return (
    <div className={`App ${state.theme}`}> {/* Aplica la clase según el tema */}
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            {/* Agrega la ruta para el detalle */}
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
      </Router>
    </div>
  );
};

export default App;
