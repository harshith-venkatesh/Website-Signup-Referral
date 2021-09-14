import { fireEvent, render, screen } from "@testing-library/react"
import LoginForm from "./LoginForm"

describe('Signup page should contain', () => {
    beforeEach(()=>{
        render(<LoginForm />);
    })
    it('should have a email,password and confirm password field, also submit button',() => {
        
        const emailField = screen.getByTestId('email-field');
        expect(emailField).toBeInTheDocument()
        const passwordField = screen.getByTestId('password-field');
        expect(passwordField).toBeInTheDocument();
        const confirmPasswordField = screen.getByTestId('confirm-password-field');
        expect(confirmPasswordField).toBeInTheDocument();
        const loginButton = screen.getByTestId('login-form')
        expect(loginButton).toBeInTheDocument()
    })
    it('should expect button to be disabled in the beginning',()=> {
        const loginButton = screen.getByTestId('login-form')
        expect(loginButton).toBeInTheDocument()
        expect(loginButton).toBeDisabled();
    })
})

describe('Email Component should be', () => {
    beforeEach(()=>{
        render(<LoginForm />)
    })
    it('input should contain @ and . keywords',()=>{
        const emailField = screen.getByTestId('email-field');
        expect(emailField).toBeInTheDocument()
        fireEvent.change(emailField,{target:{value:'test'}})
        const emailErrorField = screen.getByTestId('email-error-field');
        expect(emailField.classList).toContain('invalid-field');
        expect(emailErrorField.textContent).toBe('Entered Email should include @ and .')
        const loginButton = screen.getByTestId('login-form')
        expect(loginButton).toBeDisabled();
    })
    
    it('input should contain characters between @ and .',()=>{
        const emailField = screen.getByTestId('email-field');
        expect(emailField).toBeInTheDocument()
        fireEvent.change(emailField,{target:{value:'test.com@gmail'}})
        const emailErrorField = screen.getByTestId('email-error-field');
        expect(emailField.classList).toContain('invalid-field');
        expect(emailErrorField.textContent).toBe('Entered Email should include @ and .')
        const loginButton = screen.getByTestId('login-form')
        expect(loginButton).toBeDisabled();
    })
   
    test.todo('error message to be displayed after 500 ms if user input is invalid')
    it('error message should not be displayed if user input is valid',() => {
        const emailField = screen.getByTestId('email-field');
        expect(emailField).toBeInTheDocument()
        fireEvent.change(emailField,{target:{value:'test@gmail.com'}})
        const loginButton = screen.getByTestId('login-form')
        expect(loginButton).toBeDisabled();
    })
  })


describe('Button in Signup screen should be', () => {
    test.todo('disabled if email is empty or invalid')
    test.todo('disabled if password is empty')
    test.todo('disabled if confirm password is empty')
    test.todo('disabled if password does not match with confirm password')
    test.todo(`disabled if all the fields are filled, but any field's validation has failed`)
    test.todo(`enabled if all the fields are not empty and validated`)
  })
