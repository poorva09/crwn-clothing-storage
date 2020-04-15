import React from 'react';

import './sign-in.styles.scss';
import { FormInput } from '../../components/form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''}, console.log(this.state));
        }
        catch(error){
            console.error(error);
        }
       
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value});
    }

    render() {
        return (
            <div className="sign-in">
                <h1 className="title">I already have an account</h1>
                <span>Sign in with your email and password</span>

                <div>
                    <form onSubmit={this.handleSubmit}> 
                        <FormInput type="email" label="Email" name="email" value={this.state.email} handleChange={this.handleChange} required />
                        <FormInput type="password" label="Password" name="password" value={this.state.password} handleChange={this.handleChange} required />

                        <div className="buttons">
                            <CustomButton type="submit">
                                SIGN IN
                            </CustomButton>

                            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                                {' '} SIGN IN WITH GOOGLE { ' '}
                            </CustomButton>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}