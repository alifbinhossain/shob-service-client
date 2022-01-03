import React from "react";
import locationIcon from "../../../images/placeholder.svg";
import searchIcon from "../../../images/search.svg";
import { Col, Row } from "react-bootstrap";
import services from "../../../fakedata/heroServicesData";
const HeroServices = () => {
  return (
    <section className="heroServices">
      <div className="heroServices__inputbox my-4 ">
        <div className="heroServices__inputbox--1 me-2">
          <img src={locationIcon} alt="" />
          <input type="text" placeholder="location" />
        </div>
        <div className="heroServices__inputbox--2">
          <img src={searchIcon} alt="" />
          <input type="text" placeholder="search" />
        </div>
      </div>

      <Row xs={2} md={5} className="g-2 my-4 heroServices__list">
        {services.map((service) => (
          <Col className="heroServices__item">
            <div className="heroServices__item--imgBox">
              <img src={service.img} alt="" srcset="" />
            </div>
            <p>{service.title}</p>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default HeroServices;
