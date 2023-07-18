import React from 'react';
import GraficaProduct from '../../Components/GraficaProduct/GraficaProduct';
import GraficaUser from '../../Components/GraficaUser/GraficaUser';
import { GraficaServices } from '../../Components/GraficaServices/GraficaServices';

export const GraficasPage = () => {
  return (
    <div>
      <h2>Grafica de Productos</h2>
      <GraficaProduct />
      
      <h2>Grafica de Usuarios</h2>
      <GraficaUser />

      <h2>Gráfica de servicios</h2>
      <GraficaServices />
    </div>  
  );
};

