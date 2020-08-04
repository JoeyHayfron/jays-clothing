import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import toggleCartDropDown from '../../redux/cart/cart.action';

import './cart-icon.style.scss';

const CartIcon = ({ toggleCartDropDown }) => (
  <div className="cart-icon" onClick={toggleCartDropDown}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropDown: () => dispatch(toggleCartDropDown()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
