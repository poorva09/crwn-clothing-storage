import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_wrIIAQkCmOKOf2JKdb4QSD4p00F7tqvGSF';

    const onToken= (token) => {
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name='Crwn Clothing Ltd.'
            billingAddress
            shippingAddress
            image= "https://svgshare.com/i/CUz.svg"
            description={`Your total price is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
    