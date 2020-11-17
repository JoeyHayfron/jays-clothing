export const toggleCartDropDown = () => ({
  type: 'TOGGLE_CART_DROPDOWN',
});

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: 'CLEAR_ITEM_FROM_CART',
  payload: item,
});

export const reduceItem = (item) => ({
  type: 'REDUCE_ITEM',
  payload: item,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});
