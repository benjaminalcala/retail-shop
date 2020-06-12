import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, GoogleSignIn, inverted, ...otherProps}) => (
    <button className={`${inverted?'inverted':''}
        ${GoogleSignIn?'sign-in-with-google':''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;