import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../Componentes/Home";
import Sobre from "../Componentes/sobre";
import Usuario from "../Componentes/usuario";

const AppRoutes = () => {
   return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/sobre" element={<Sobre />} />
               <Route path="/usuario" element={<Usuario />} />
           </Routes>
       </BrowserRouter>
   );
}

export default AppRoutes;
