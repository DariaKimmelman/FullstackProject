import React from 'react'
import  {Modal, Button} from 'react-bootstrap'
import {useState} from 'react'
function Login(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    
    return <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary">
        Close
      </Button>
      <Button variant="primary">
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>

    
}

export default Login;