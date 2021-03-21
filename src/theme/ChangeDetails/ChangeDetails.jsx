import {React, useState} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact'
import {Button, Modal} from 'react-bootstrap'
import {useForm} from 'react-hook-form'

function ChangeDetails(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data=>console.log(data);
  const { register:register2, handleSubmit:handleSubmit2, watch:watch2, errors:errors2 } = useForm();
  const onSubmit2 = data=>console.log(data);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <div><MDBContainer style= {{width:'90%', marginLeft:'0'}}>
    <MDBRow>
      <MDBCol md="6">
        <form onClick={handleSubmit(onSubmit)} style= {{backgroundColor:'white'}}>
          <p className="h4 text-center mb-4">Your Information</p>
          <label htmlFor="defaultFormRegisterNameEx" className="grey-text" >
             First name
          </label>
          <input type="text" id="defaultFormRegisterNameEx" name="fname" defaultValue="" className="form-control" ref={register({required:true,minLength:2})}/>
          {errors.fname && <span>This field is required</span>}
          <br />
          <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
             Last name
          </label>
          <input type="text" id="defaultFormRegisterNameEx" defaultValue="" name="lname" className="form-control" ref={register({required:true,minLength:2})}/>
          {errors.lname && <span>This field is required</span>}
          <br />
          <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
             Email
          </label>
          <input type="email" id="defaultFormRegisterEmailEx" name="email" defaultValue="lala" className="form-control"  ref={register({required:true,minLength:6, pattern:/^\S+@\S+$/i})} />
          {errors.email && <span>This field is required</span>}
          <br />
          <div className="text-center mt-4">
            <MDBBtn color="danger" type="submit">
              Save
            </MDBBtn>
            <MDBBtn onClick={handleShow} style={{backgroundColor:'#6C757D', color:'white', marginLeft:'15px'}} type="submit">
              Change Password
            </MDBBtn>
          </div>
        </form>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <Modal show={show} onHide={handleClose} >
      <Modal.Header style={{border:'none',backgroundColor:'#ebe8e5', padding:'10px'}}closeButton/>
      <MDBContainer style={{textAlign:"center",backgroundColor:'#ebe8e5'}}>
  <MDBRow>
    <MDBCol md="11">
      <form style={{marginLeft:'10%'}} onClick={handleSubmit2(onSubmit2)}>
        <p className="h4 text-center mb-4">Change Password</p>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          Current Password
        </label>
        <input type="password" name = 'curpassword' id="defaultFormRegisterNameEx" className="form-control" ref={register2({required:true})}/>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          New Password
        </label>
        <input type="password" name='newpassword' id="defaultFormRegisterLNameEx" className="form-control" ref={register2({required:true, minLength: 8})} />
        {errors2.newpassword && <span>Password must be at least 8 characters long</span>}
        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
          Confirm Your Password
        </label>
        <input type="password" name = 'confirmpassword' id="defaultFormLoginPasswordEx" className="form-control"ref={register2({
          validate: value =>
            value === watch2('newpassword')|| "The passwords do not match"
        })}/>
        {errors2.confirmpassword && <span>{errors2.confirmpassword.message}</span>}
        <div className="text-center mt-4">
          <MDBBtn  className="login" color="danger" type="submit" block>Change Password</MDBBtn>
        </div>
        
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
      </Modal>
  
  
  </div>
}

export default ChangeDetails