import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const GraficaProduct = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/product/masComprados');
        setData(response.data.map((product, index) => ({
          ...product,
          contadorCompras: product.contadorCompras,
          barSize: index === 0 ? 60 : 30,
          fill: index === 0 ? '#8884d8' : '#82ca9d', // Establecer color diferente para la barra más grande
        })));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const fill = '#8884d8'; // Establecer el color predeterminado para las barras

  return (
    <BarChart width={600} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="contadorCompras" barSizeKey="barSize" fill={fill} />
    </BarChart>
  );
};

export default GraficaProduct;
