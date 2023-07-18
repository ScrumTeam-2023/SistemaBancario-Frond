import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const GraficaUser = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/user/masMovements');
        setData(response.data.map((user) => ({
          name: user.name,
          "contador de movimientos": user["contador de movimientos"],
        })));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <LineChart width={600} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="contador de movimientos" stroke="#8884d8" />
    </LineChart>
  );
};      

export default GraficaUser;
