import { Bar } from 'react-chartjs-2';
import {Chart} from 'chart.js';
import React, { useEffect, useRef } from 'react';

export const GraficaCompras = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: data,
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};


