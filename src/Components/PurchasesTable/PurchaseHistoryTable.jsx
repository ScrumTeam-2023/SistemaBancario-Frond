import React from 'react';

export const PurchaseHistoryTable = ({ purchases }) => {
  return (
    <div>
      <h3>Historial de Compras</h3>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre del Servicio</th>
            <th>Precio</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase) => (
            <tr key={purchase._id}>
              <td>{purchase._id}</td>
              <td>{purchase.serviceName}</td>
              <td>{purchase.servicePrice}</td>
              <td>{purchase.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
