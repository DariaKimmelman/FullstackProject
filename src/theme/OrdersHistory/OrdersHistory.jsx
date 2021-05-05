import {useContext} from 'react'
import {Table} from 'react-bootstrap'
import {StoreContext} from '../global'

function OrdersHistory(props) {
     const [store, updateStore] = useContext(StoreContext)
     function toTableRow(item, index){
        return    <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}$</td>
            <td>{item.shipping}</td>
            <td>{item.date.toUTCString()}</td>
          </tr>
    
        }
        return <Table style={{width:'90%', backgroundColor:'white'}} bordered hover responsive="sm" >
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Shipping address</th>
            <th>Order Date</th>
    
          </tr>
        </thead>
        <tbody>
          {props.orders.map(toTableRow)}
        </tbody>
      </Table>
    

    
}


export default OrdersHistory