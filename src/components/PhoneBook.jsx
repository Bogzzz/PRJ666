import React from "react";
import { Button, Modal,ListGroup} from 'react-bootstrap';
import people from './PhoneBookData.json';



function PhoneBook() {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);


    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Phone Book
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
         
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header  closeButton>
            <Modal.Title>Phone Book</Modal.Title>
          </Modal.Header>
                    

        <ListGroup>
        {people.map(data =>(
              <ListGroup.Item action onClick={alert}  key={`${data.id}`}>
                  {data.name}
              </ListGroup.Item>
          ))}
           </ListGroup>
       
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
         
          </Modal.Footer>
        </Modal>
      </>
    );


  }
  
  export default PhoneBook;      

 


