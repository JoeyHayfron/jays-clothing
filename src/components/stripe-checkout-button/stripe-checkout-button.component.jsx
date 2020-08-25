import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButon = ({ price }) => {
  const stripePrice = price * 100;
  const stripeKey =
    'pk_test_51HK4bfJJ7kdgOwXa1zg3i0LLaLkaZJJ9P7yjVgKR2KjT30RI2LUulQiUORPJQ0386HCfXEdwlimfth6GgbGtwhN800jKJejB2h';

  const onToken = (token) => {
    console.log(token);
    alert('Your payment was successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Jay's Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={stripeKey}
    />
  );
};

export default StripeCheckoutButon;
