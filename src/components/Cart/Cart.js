import React, { Component } from 'react';
import Title from "../Title";
import { ProductConsumer } from "../../Context";
import EmptyCart from "./EmptyCart"
import CartColumn from "./CartColumn";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <section className="my-5">
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (!cart.length) {
              return <EmptyCart />
            } else {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumn />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              )
            }
          }}
        </ProductConsumer>
      </section>
    )
  }
}
