import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import ServiceModal from '../ServiceModal/ServiceModal';

const ServiceItems = ({img, title, ...othersProps}) => {
  // console.log(othersProps);
  const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    return (
        <>
            <Col className="heroServices__item" variant="primary" onClick={handleShow}>
            <div className="heroServices__item--imgBox">
              <img src={img} alt="" srcset="" />
            </div>
            <p>{title}</p>
            
          </Col>
          <ServiceModal show={show} setShow={setShow} title={title} othersProps={othersProps} />
        </>
    );
};

export default ServiceItems;