import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import backend_url from '../conf';

export default function Bestätigung({products, resetCount}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function SubmitButton({products, resetCount}) {

    // Submit to Backend
    // WHERE count != 0
    function sendToBackend(){
        products.map( (item)=>{
            if (item.count !== 0){
                const data = {product_id:parseInt(item.id), sold:item.count};
                console.log(data);
                post(data);
            }
        })
    }

    // Send Post request
    async function post(data){
        // Post products to python backend        
        const req_options = {
            method : 'POST',
            crossDomain : true,
            headers : { 'Content-Type':'application/json' },
            body: JSON.stringify(data)
        };
        fetch(backend_url+'/orders',req_options)
            .catch(error => console.log(error))
        return 'done';
    }

    function send(){
        sendToBackend();
        resetCount();
    }

    return (
        <button onClick={send} className="btn btn-primary">
            Bestellung Senden
        </button>    
    )   
}
  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Bestätigen
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Bestellung bestätigen!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bitte die die Einträge überprüfen
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Schließen
          </Button>
          <SubmitButton products={products} resetCount={resetCount}/>
        </Modal.Footer>
      </Modal>
    </>
  );
}
