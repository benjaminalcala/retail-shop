import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const pusblishableKey = 'pk_test_G9rRhXvBBxtGbukeu43r7dLa00IiZYM8na';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                token,
                amount: priceForStripe
            }
        })
        .then(response => {
            alert('Payment was succesful!')
        })
        .catch(err => {
            console.log('There was an error: ' + JSON.parse(err))
            alert('Payment was unsuccesful, please use credit card provided')
        })
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={pusblishableKey}
        />
    )

}

export default StripeCheckoutButton;