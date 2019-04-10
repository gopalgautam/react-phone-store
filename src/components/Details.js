import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import Title from "./Title";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {          
          const {id, company, img, info, title, price, inCart} =  value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted my-5">
                  <Title name="product" title="Details" />
                </div>
              </div>
              <div className="row">
                {/* product image */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model : {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-upparcase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>Price : <span>$</span> {price}</strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about Product:
                  </p>
                  <p className="text-muted lead">
                    {info}
                  </p>
                  <div>
                    <Link to="/">
                      <ButtonContainer>Back To Products</ButtonContainer>
                    </Link>
                    <ButtonContainer cart
                      disabled={inCart ? true : false} 
                      onClick={() => { 
                        value.addToCart(id);
                        value.openModal(id);
                      }}>
                        {inCart ? "inCart" : "add to cart"}
                      </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          )          
        }}
      </ProductConsumer>
    )
  }
}
