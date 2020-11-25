import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import "./carosal.css";

const CarouselContainer = (props) => {
  return (
    <Carousel
      id="myCarousel"
      pause="hover"
      className="bg-dark carousel slide carousel-fade"
      data-ride="carousel"
    >
      {props.products.map((product) => (
        <div className="carousel-item" key={product._id}>
          <div className="mask flex-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7 col-12 order-md-1 order-2">
                  <h5>
                    {product.name} <br /> (${product.price})
                    <br />
                  </h5>
                  <p>
                    {product.description} <br />
                  </p>
                  <Link to={`/product/${product._id}`}>BUY NOW</Link>{" "}
                </div>
                <div className="col-md-5 col-12 order-md-2 order-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselContainer;
