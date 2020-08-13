import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],

  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],

  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],

  (cartItems) =>
    cartItems.reduce(
      (accumalatedCount, cartItem) => accumalatedCount + cartItem.quantity,
      0
    )
);

export const selectTotal = createSelector(
  [selectCartItems],

  (items) =>
    items.reduce(
      (accumalatedCount, cartItem) =>
        accumalatedCount + cartItem.quantity * cartItem.price,
      0
    )
);
