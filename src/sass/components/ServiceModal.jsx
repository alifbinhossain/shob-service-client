import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ServiceModal = ({show, setShow, title, othersProps}) => {
    const handleClose = () => setShow(false);
    // console.log(othersProps);
    return (
        <>
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          {othersProps.SERVICE_DATA.map(({title})=>(
            <p>{title}</p>
          ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );
};

export default ServiceModal;