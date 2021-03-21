import React from 'react'
import {Jumbotron} from'react-bootstrap'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact'
import background from './background.jpg'
import {useForm} from 'react-hook-form'


function ContactUs(){
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data,r)=>{
    alert(`Thank you for your message`)
   
    const templateId = 'template_39qglk7';
        const serviceID = 'project';
        sendFeedback(serviceID, templateId, { from_name: data.name, subject: data.subject, message_html: data.message, reply_to: data.email })
        r.target.reset()};
        const sendFeedback = (serviceID, templateId, variables) => {
          window.emailjs.send(
              serviceID, templateId,
              variables
          ).then(res => {
              console.log('Email successfully sent!')
          })
              .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
      }
    
        return(
        <div style={{backgroundImage: `url(${background})`, backgroundSize:'cover'}}>
            <Jumbotron style={{backgroundColor:'#5B4E77', padding:'32px'}}>
            <h1 style={{color:'white'}}> Contact Us</h1>
            </Jumbotron>
            <MDBContainer style={{backgroundColor:'inherit'}}>
  <MDBRow style={{maxWidth:'700px'}}>
    <MDBCol md="6" style={{marginLeft: '25%', backgroundColor:'white', paddingTop:'5px', paddingBottom:'5px', marginBottom:'15px'}}>
      <form action ="mailto:fatimanomoretears@gmail.com" onSubmit={handleSubmit(onSubmit)}>
        <p className="h4 text-center mb-4">Write to us</p>
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Your name
        </label>
        <input type="text" id="defaultFormContactNameEx" name='name' ref={register({required:true,minLength:2})} className="form-control" />
        {errors.name && <span>This field is required</span>}
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormContactEmailEx" name='email' className="form-control"  ref={register({required:true,minLength:6, pattern:/^\S+@\S+$/i})} />
        {errors.email && <span>This field is required</span>}
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Subject
        </label>
        <input type="text" id="defaultFormContactSubjectEx" name="subject" className="form-control" ref={register({required:true})} />
        {errors.subject && <span>This field is required</span>}
        <br />
        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
          Your message
        </label>
        <textarea type="text" id="defaultFormContactMessageEx" name="message" className="form-control" rows="3" ref={register({required:true})} />
        {errors.message && <span>This field is required</span>}
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