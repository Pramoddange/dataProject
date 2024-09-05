import React, { useState } from 'react'
import "../style/table.css"
const Table = ({data}) => {
  
    return (
        <div className="table-container">
          <table className="crypto-table">
          
          
        
            <tbody>
              <tr key={data.id} className="table-row">
                <td className="table-cell"><img src={data.image} alt={data.name} className="crypto-image" /></td>
                <td className="table-cell">{data.name}</td>
                <td className="table-cell">{data.symbol.toUpperCase()}</td>
                <td className="table-cell">${data.current_price}</td>
                <td className="table-cell">${data.market_cap.toLocaleString()}</td>
                <td className={`table-cell ${data.price_change_percentage_24h > 0 ? 'positive' : 'negative'}`}>
                  {data.price_change_percentage_24h}%
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      )
    }
    
    export default Table