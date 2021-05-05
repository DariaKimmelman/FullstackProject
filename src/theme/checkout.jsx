import {useContext} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import background from './background.jpg';
import './checkout.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useForm} from 'react-hook-form'
import {faCcVisa, faCcAmex, faCcMastercard, faCcDiscover} from '@fortawesome/free-brands-svg-icons'
import * as api from '../api'
import {StoreContext} from './global';

function Checkout(props){
  const[store, updateStore] = useContext(StoreContext);
  console.log(props.sum);
  console.log(props.cart);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data, r)=>{try {
    const res = await api.postData('orders',{time: new Date().toString(), total: props.sum.total, items: props.cart,
   customer: {fname: data.fullName, email:data.email, address: `${data.address}, ${data.city}, ${data.state}, ${data.zip}` }, userId: store.user._id? store.user._id: 'user' });
    console.log(res);
    r.target.reset();
  }
  catch(err){
    console.log(err);
  }};
    return <Container fluid style={{backgroundImage: `URL(${background})`, backgroundSize:'cover',  minHeight:'480px'}}>
        <Row style={{textAlign:'center'}}>
        <h3 style={{paddingLeft:'45%', paddingBottom:'20px'}}>Order Page</h3>
        </Row>
        <Row>
          <Col xs={1}></Col>
            <Col>
        <Row>
            <Col id='checkoutbody'  >
                <Container className="container" style={{marginTop:'8px'}}>
                    <form id="checkoutForm" onSubmit={handleSubmit(onSubmit)}>
      
                        <Row className="row">
                             <Col className="col-50">
                                 <h5 className='bold' style= {{marginTop:"10px"}}>Shipping Address</h5>
                                 <label for="fname"> Full Name</label>
                                 <input type="text" id="fname"  name="fullName" ref={register({required:true})} placeholder="John M. Doe" className="input"/>
                                 {errors.fullName && <span>This field is required</span>}
                                <label for="email"> Email</label>
                                 <input type="text"  className="input" name="email" id="email"  placeholder="john@example.com" ref={register({required:true,minLength:6, pattern:/^\S+@\S+$/i})}/>
                                 {errors.email && <span>This field is required</span>}
                                <label for="adr"> Address</label>
                                <input type="text"  className="input" id="adr" name="address" placeholder="542 W. 15th Street" ref={register({required:true})}/>
                                {errors.address && <span>This field is required</span>}
                                <label for="city"> City</label>
                                 <input type="text"  className="input" id="city" name="city" placeholder="New York" ref={register({required:true})}/>
                                 {errors.city && <span>This field is required</span>}

            <Row className="row">
              <Col className="col-50">
                <label for="state">Country</label>
                <input type="text"   className="input" id="state" name="state" ref={register({required:true})} placeholder="NY"/>
                {errors.state && <span>This field is required</span>}
              </Col>
              <Col class="col-50">
                <label for="zip">Zip</label>
                <input type="text"   className="input" id="zip" name="zip" placeholder="10001"  ref={register({required:true, maxLength:6})}/>
                {errors.zip && <span>This field is required</span>}
              </Col>
            </Row>
          </Col>

          <Col className="col-50">
            <h5 className='bold' style= {{marginTop:"10px"}}>Payment</h5>
            
            
            <label for="cname">Name on Card</label>
            <input type="text"  className="input" id="cname" name="cardname" placeholder="John More Doe" ref={register({required:true})}/>
            {errors.cardname && <span>This field is required</span>}
            <label for="ccnum">Credit card number</label>
            <input type="text"  className="input" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" ref={register({required:true})}/>
            {errors.cardnumber && <span>This field is required</span>}
            <label for="expmonth">Exp Month</label>
            <input type="text"   className="input"id="expmonth" name="expmonth" placeholder="September" ref={register({required:true})}/>
            {errors.expmonth && <span>This field is required</span>}
            <Row className="row">
              <Col className="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text"  className="input" id="expyear" name="expyear" placeholder="2018" ref={register({required:true})}/>
                {errors.expyear && <span>This field is required</span>}
              </Col>
              <Col className="col-50">
                <label for="cvv">CVV</label>
                <input type="text"  className="input" id="cvv" name="cvv" placeholder="352" ref={register({required:true, maxLength:4})}/>
                {errors.cvv && <span>This field is required</span>}
              </Col>
              </Row>
              </Col>
              </Row>
              </form>
              </Container>
              </Col>
              </Row>
              </Col>
        

        
            <Col  xs={4} style={{textAlign:'left'}}>
                <div className='ordersummary'>
                <h5>Order Summary</h5>
                <div>
                <p>Artwork subtotal <span style={{float:'right'}}>{props.sum.price}$</span></p>
                <p>Shipping total <span style={{float:'right'}}>{props.sum.ship}$</span></p>
                <p style={{fontWeight:'bolder'}}>Order total <span style={{float:'right'}}>{props.sum.total}$</span></p>
                <Button form="checkoutForm" type="submit"style={{marginBottom: '10px'}}variant="danger" block>Confirm Purchase</Button>
                <div className="icon-container">
              <FontAwesomeIcon icon={faCcVisa} style={{color:'navy'}}/>
              <FontAwesomeIcon icon={faCcAmex} style={{color:'blue'}}/>
              <FontAwesomeIcon icon={faCcMastercard} style={{color:'red'}}/>
              <FontAwesomeIcon icon={faCcDiscover} style={{color:'orange'}}/>
            </div>
            </div> 
                
            </div>
            </Col>
            </Row>
    </Container>

}

export default Checkout;

