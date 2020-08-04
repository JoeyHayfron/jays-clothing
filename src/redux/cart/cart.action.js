export const toggleCartDropDown = () => ({
  type: 'TOGGLE_CART_DROPDOWN',
});

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: item,
});
