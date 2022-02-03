/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {  Modal } from 'react-bootstrap';

const ServiceModal = ({show, setShow, title, othersProps}) => {
    const handleClose = () => setShow(false);
    return (
        <>
        <Modal  className="serviceModal" show={show} onHide={handleClose} centered>
        <div className="serviceModal__header">
          <p>{title}</p>
          <button onClick={handleClose} type="button" className="btn-close" aria-label="Close"></button>
        </div>
        <div className="serviceModal__body">
          {othersProps.SERVICE_DATA.map(({title, image})=>(
            <div className="serviceModal__body__contents">
              <div className="serviceModal__body__content">
              <img src={image} />
              <p>{title}</p>
            </div>
            </div>
          ))}
        </div>
      </Modal>
        </>
    );
};

export default ServiceModal;