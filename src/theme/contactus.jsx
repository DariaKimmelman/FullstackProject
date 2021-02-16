import React from 'react'
import {Jumbotron} from'react-bootstrap'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact'
import background from './background.jpg'

function ContactUs(){
    return(
        <div style={{backgroundImage: `url(${background})`, backgroundSize:'cover'}}>
            <Jumbotron style={{backgroundColor:'#5B4E77', padding:'32px'}}>
            <h1 style={{color:'white'}}> Contact Us</h1>
            </Jumbotron>
            <MDBContainer>
  <MDBRow style={{}}>
    <MDBCol md="6" style={{marginLeft: '25%', backgroundColor:'white', paddingTop:'5px', paddingBottom:'5px', marginBottom:'15px'}}>
      <form>
        <p className="h4 text-center mb-4">Write to us</p>
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Your name
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormContactEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Subject
        </label>
        <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
          Your message
        </label>
        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
        <div className="text-center mt-4" style={{ marginBottom:'15px'}}>
                  <MDBBtn color="danger" outline type="submit" style={{color: 'white'}}>
                    Send
                    
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      
    
       
</div>
    ) 
 
}

export default ContactUs;