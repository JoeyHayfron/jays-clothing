import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { withRouter } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { toggleCartDropDown } from '../../redux/cart/cart.action';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ items, history, dispatch }) => (
  <div className="cart-dropdown">
    {items.length ? (
      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    ) : (
      <span className="empty-message">Your cart is empty</span>
    )}
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartDropDown());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
