import React from 'react'
import {Table} from 'react-bootstrap'

function OrdersTable(props){
    console.log(props.orders);
    function toTableRow(item, index){
    return    <tr key={index}>
        <td>{item.orderId}</td>
        <td>{item.ProductId}</td>
        <td>{item.ProductName}</td>
        <td>{item.price}</td>
        <td>{item.customerId}</td>
        <td>{item.customerName}</td>
        <td>{item.orderDate.toString()}</td>
      </tr>

    }
    return <Table style={{width:'90%', backgroundColor:'white'}} bordered hover responsive="sm" >
    <thead>
      <tr>
        <th>Order Id</th>
        <th>Product Id</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Customer Id</th>
        <th>Customer Name</th>
        <th>Order Date</th>

      </tr>
    </thead>
    <tbody>
      {props.orders.map(toTableRow)}
    </tbody>
  </Table>

}
export default OrdersTable