import React from 'react'
import '../Tables/Tables.css'
function Tables(props) {


  return (
    <div className='main'>
        <div className='table-container'>
      <table>
        <thead>
            <tr>
            <th >ID</th>
                <th >TITLE</th>
                <th >PRICE</th>
                <th >TAXAS</th>
                <th >ADS</th>
                <th  >DISCOUNT</th>
                <th >TOTAL</th>
                <th >CATEGORY</th>
                <th>UPADTE</th>
                <th>DELETE</th>
            </tr>
        </thead>
        <tbody >
          {props.updatedTable.map((item,index)=>(
            <tr>
            <td>{index}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.taxas}</td>
            <td>{item.ads}</td>
            <td>{item.discount}</td>
            <td>{item.total}</td>
            <td>{item.category}</td>
            <td><button onClick={()=>props.update_item(index)}>UPDATE</button></td>
            <td><button onClick={()=>props.delete_item(index)}>DELETE</button></td>
            </tr>
          ))}
        
        </tbody>
      </table></div>
    </div>
  )
}

export default Tables
