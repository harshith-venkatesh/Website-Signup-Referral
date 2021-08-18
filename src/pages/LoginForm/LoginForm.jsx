import React, { useState } from 'react'
import './LoginForm.css'

const emailValidation = (email) => {
    return email.includes('@') && email.includes('.') && (email.indexOf('@') < email.indexOf('.') && email.length > 6)
}
const LoginForm = () => {
    const [formEnable,setFormEnable] = useState(false)
    const [userForm,setUserForm] = useState({
        emailField: '',
        password:'',
        confirmPassword: '',
        errorInEmail: false,
        errorInPassword: false,
    })
    const {
        emailField,
        password,
        confirmPassword,
        errorInEmail,
        errorInPassword,
    } = userForm;

    const disabled = !errorInEmail && !errorInPassword && formEnable;

    const setEmailField = (e) => {
        e.preventDefault();
        const email = e.target.value;
        if(emailValidation(email)){
            setUserForm({...userForm,emailField: email,errorInEmail:false})
        } else {
            setUserForm({...userForm,emailField: email,errorInEmail:true})
        }
    }

    const setPassword = (e) => {
        e.preventDefault();
        const password = e.target.value;
        console.log(password)
        setUserForm({...userForm,password:password})
    }

    const checkPasswordMatch = (e) => {
        e.preventDefault();
        const confirmPassword = e.target.value;
        if(password === confirmPassword){
            setFormEnable(true)
            setUserForm({...userForm,confirmPassword ,errorInPassword:false})
        } else {
            setFormEnable(false)
            setUserForm({...userForm,confirmPassword,errorInPassword:true})
        }
    }

    const validateUser = (e) => {
        e.preventDefault()
        console.log(userForm)
    }
    console.log(userForm)
    return (
            <form className="login-form-container" onSubmit={validateUser}>
                <header className="sign-up-header">Sign Up</header>
                <label htmlFor="email-field">Enter Email: 
                    
                </label>
                <input className={errorInEmail ? 'invalid-field' : ''} type="text" value={emailField} onChange={setEmailField} placeholder="Enter your Email ID" data-testid="email-field" />
                <label htmlFor="password-field">
                Enter Password: 
                </label>
                <input type="password" placeholder="Enter password" value={password} onChange={setPassword} data-testid="password-field"  />
                <label htmlFor="confirm-password-field">
                Confirm Password: 
                </label>
                <input type="password" value={confirmPassword} placeholder="Confirm password" onChange={checkPasswordMatch} data-testid="confirm-password-field"  />
                {errorInEmail && <div className="error-field" data-testid="email-error-field">Entered Email should include @ and .</div>}
                {errorInPassword && <div className="error-field" data-testid="password-error-field">Password should match</div>}
                <button type="submit" data-testid='login-form' disabled={!disabled}>Sign Up</button>
            </form>
    )
}

export default LoginForm
