import React from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import './forgotten.css'
import Background from './background.jpg'

function Forgotten(){
    return <div className='textalignleft' style={{minHeight:'500px', backgroundImage:`url(${Background})`, backgroundSize:'cover', paddingTop:"40px"}}>
        <Row>
        <Col xs={1}></Col>
        <Col>
        <h5>Forgotten Your Password?</h5>
        <p style={{fontSize:'110%'}}>Please enter your email address below. We'll send you a link so that you can set a new password.</p>
        <div>
            <label   style={{display:'inline-block',marginRight:'25px', fontSize:'110%'}}htmlFor="">Email</label>
            <input className="inputstyle"  type="email"/>
        </div>
        <Button style={{marginTop:'20px'}} variant="danger">Send Email</Button>
        </Col>
        </Row>

    </div>
}
export default Forgotten