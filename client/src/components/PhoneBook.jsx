import React, { useEffect, useState } from "react";
import { Button, Modal,ListGroup} from 'react-bootstrap';

import {BsBookHalf} from 'react-icons/bs';

//import NPCcall from './NPCcall';


function PhoneBook() {

   // const [show, setShow] = React.useState(false);

     const [PBModal, setPBShow] = React.useState(false);
     const ClosePB = () => setPBShow(false);
     const OpenPB = () => setPBShow(true);

    const [NPC, dataSet] = useState([])
   

    useEffect(() => {
      async function fetchMyAPI() {
        let response = await fetch('/api/get/getAllNpc')
        response = await response.json()
        dataSet(response)
      }
  
      fetchMyAPI()
      
    }, [])
 
    return (
      <>
      
        <Button  variant="outline-info font-weight-bold" onClick={OpenPB}>
          Phone Book <BsBookHalf />
        </Button>
      
        <Modal
          show={PBModal}
          onHide={ClosePB}
         
          aria-labelledby="contained-modal-title-vcenter"
          centered
          
        >
          <Modal.Header  closeButton>
            <Modal.Title>Phone Book</Modal.Title>
          </Modal.Header>
       
            
              <ListGroup>
              {NPC.map(data =>(
                   <ListGroup.Item action onClick={ClosePB}  key={data.NPC_ID}>
                       {data.NAME}
                    </ListGroup.Item>
              ))}
                </ListGroup> 
       
          <Modal.Footer>
            <Button variant="secondary" onClick={ClosePB}>
              Close
            </Button>
         
          </Modal.Footer>
        </Modal>
      </>
    );


 }


  
  export default PhoneBook;      

 



