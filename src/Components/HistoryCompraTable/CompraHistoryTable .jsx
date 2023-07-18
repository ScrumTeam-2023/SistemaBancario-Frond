import React from 'react';

export const CompraHistoryTable = ({ compras }) => {
  return (
    <div>
      <h3>Historial de Compras</h3>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre del Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {compras.map((compra) => (
            <tr key={compra._id}>
              <td>{compra._id}</td>
              <td>{compra.product.name}</td>
              <td>{compra.cantidad}</td>
              <td>{compra.product.price}</td>
              <td>{compra.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
