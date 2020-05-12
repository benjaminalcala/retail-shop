import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, GoogleSignIn, ...otherProps}) => (
    <button className={`${GoogleSignIn?'sign-in-with-google':''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;