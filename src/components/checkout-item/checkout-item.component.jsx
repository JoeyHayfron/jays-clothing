import React from 'react';

import { connect } from 'react-redux';
import {
  removeItemFromCart,
  reduceItem,
  addItem,
} from '../../redux/cart/cart.action';

import './checkout-item.style.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, reduceItem }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={cartItem.imageUrl} alt="item" />
    </div>
    <span className="name">{cartItem.name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => reduceItem(cartItem)}>
        &#10094;
      </div>
      <span className="value">{cartItem.quantity}</span>
      <div className="arrow" onClick={() => addItem(cartItem)}>
        &#10095;
      </div>
    </span>
    <span className="price">{cartItem.price}</span>
    <div className="remove-button" onClick={() => clearItem(cartItem)}>
      &#10005;
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  reduceItem: (item) => dispatch(reduceItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
