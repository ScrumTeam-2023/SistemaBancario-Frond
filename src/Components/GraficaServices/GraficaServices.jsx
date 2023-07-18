import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const GraficaServices = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/addServices/mostPurchased');
        setData(response.data.map((service) => ({
          name: service.name,
          "Contador de adquisiciones": service.purchaseCount,
        })));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <BarChart width={600} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Contador de adquisiciones" fill="#8884d8" />
    </BarChart>
  );
};

