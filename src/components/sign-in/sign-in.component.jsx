import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SignInWithGoogle } from "../../firebase/firebase.utils";



class SignIn extends React.Component{
    constructor(props){
    super(props);

    this.state = {
        'email' : '',
        'password':''

    };
}

render(){

const handleSubmit = event =>{
    event.preventDefault();
    this.setState({email:'',password:''});
}

const handleChange = event => {
    const {name,value} = event.target;
    this.setState({[name]:value});
}

   return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name='email' type='email' label='Email' value={this.state.email} onChange={handleChange} required/>

                <FormInput name='password' type='password' label='Password' value={this.state.password} onChange={handleChange} required/>
                <div className='buttons'>
                <CustomButton type='submit' value='Submit Form'>Sign IN</CustomButton>
                <CustomButton isGoogleSignIn onClick={SignInWithGoogle}>Sign IN with google</CustomButton>
                </div>
            </form>
        </div>
    )
}
}

export default SignIn;