import React from 'react';


export default function CartItem({ item, value }) {
  console.log(item, value)
  const { id, img, title, price, total, count } = item;
  const { increament, decreament, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center mx-auto">
      <div className="col-10 col-lg-2 mx-auto">
        <img src={img} alt="Product" style={{ width: "5rem", height: "5rem" }} className="img-fluid" />
      </div>
      <div className="col-10 col-lg-2 mx-auto">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      <div className="col-10 col-lg-2 mx-auto">
        <span className="d-lg-none">price : </span>
        {price}
      </div>
      <div className="col-10 col-lg-2 my-2 my-lg-0 mx-auto">
        <div className="d-flex justify-content-center">
          <span className="btn btn-black mx-1" onClick={() => decreament(id)}>-</span>
          <span className="btn btn-black mx-1">{count}</span>
          <span className="btn btn-black mx-1" onClick={() => increament(id)}>+</span>
        </div>
      </div>

      <div className="col-10 col-lg-2 mx-auto">
        <div className="cart-icon" onClick={() => removeItem(id)}>
        <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className="col-10 col-lg-2 mx-auto">
      <strong>item total : $ {total}</strong>
      </div>
    </div>
  )
}
