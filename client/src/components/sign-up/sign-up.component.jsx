import React, {useState} from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component'
//import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import {signUpStart} from'../../redux/user/user.actions';

import './sign-up.styles.scss'


const SignUp = ({signUpStart}) => {
   
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleChange = event => {
        const {name, value} = event.target;
        setCredentials({...userCredentials, [name]: value})
    } 

    const handleSubmit = async event => {
        event.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords don't match");
            return
        }
        signUpStart({email, password, displayName}) 
    }

    
        
        return(
            <div className='sign-in'>
                <h2 className="title">I do not have an account</h2>
                <span>Sign up to with your email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput 
                        type="text"
                        name ="displayName"
                        value={displayName}
                        onChange={handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput 
                        type="email"
                        name ="email"
                        value={email}
                        onChange={handleChange}
                        label="Email"
                        required
                    />
                    <FormInput 
                        type="password"
                        name ="password"
                        value={password}
                        onChange={handleChange}
                        label="Password"
                        required
                    />
                    <FormInput 
                        type="password"
                        name ="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>

            </div>
        )
    

}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);

