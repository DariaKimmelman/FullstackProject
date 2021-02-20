import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import background from './background.jpg';
import './checkout.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCcVisa, faCcAmex, faCcMastercard, faCcDiscover} from '@fortawesome/free-brands-svg-icons'

function Checkout(props){
    return <Container fluid style={{backgroundImage: `URL(${background})`, backgroundSize:'cover',  minHeight:'480px'}}>
        <Row style={{textAlign:'center'}}>
        <h3 style={{paddingLeft:'45%', paddingBottom:'20px'}}>Order Page</h3>
        </Row>
        <Row>
            <Col>
        <Row>
            <Col id='checkoutbody'  >
                <Container className="container">
                    <form>
      
                        <Row className="row">
                             <Col className="col-50">
                                 <h5 className='bold'>Shipping Address</h5>
                                 <label for="fname"> Full Name</label>
                                 <input type="text" id="fname" name="firstname" placeholder="John M. Doe" className="input"/>
                                <label for="email"> Email</label>
                                 <input type="text"  className="input" id="email" name="email" placeholder="john@example.com"/>
                                <label for="adr"> Address</label>
                                <input type="text"  className="input" id="adr" name="address" placeholder="542 W. 15th Street"/>
                                <label for="city"> City</label>
                                 <input type="text"  className="input" id="city" name="city" placeholder="New York"/>

            <Row className="row">
              <Col className="col-50">
                <label for="state">State</label>
                <input type="text"   className="input" id="state" name="state" placeholder="NY"/>
              </Col>
              <Col class="col-50">
                <label for="zip">Zip</label>
                <input type="text"   className="input" id="zip" name="zip" placeholder="10001"/>
              </Col>
            </Row>
          </Col>

          <Col className="col-50">
            <h5 className='bold'>Payment</h5>
            
            
            <label for="cname">Name on Card</label>
            <input type="text"  className="input" id="cname" name="cardname" placeholder="John More Doe"/>
            <label for="ccnum">Credit card number</label>
            <input type="text"  className="input" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">Exp Month</label>
            <input type="text"   className="input"id="expmonth" name="expmonth" placeholder="September"/>
            <Row className="row">
              <Col className="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text"  className="input" id="expyear" name="expyear" placeholder="2018"/>
              </Col>
              <Col className="col-50">
                <label for="cvv">CVV</label>
                <input type="text"  className="input" id="cvv" name="cvv" placeholder="352"/>
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
                <p>Artwork subtotal <span style={{float:'right'}}>0.0$</span></p>
                <p>Shipping total <span style={{float:'right'}}>30$</span></p>
                <p style={{fontWeight:'bolder'}}>Order total <span style={{float:'right'}}>{props.sum}$</span></p>
                <Button style={{marginBottom: '10px'}}variant="danger" block>Confirm Purchase</Button>
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

