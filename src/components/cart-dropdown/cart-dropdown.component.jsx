import React from 'react';

import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { withRouter } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { toggleCartDropDown } from '../../redux/cart/cart.action';

import {
  CartDropDownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropDownButton,
} from './cart-dropdown.styles';

const CartDropDown = ({ items, history, dispatch }) => (
  <CartDropDownContainer>
    {items.length ? (
      <CartItemsContainer>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartItemsContainer>
    ) : (
      <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
    )}
    <CartDropDownButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartDropDown());
      }}
    >
      GO TO CHECKOUT
    </CartDropDownButton>
  </CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
