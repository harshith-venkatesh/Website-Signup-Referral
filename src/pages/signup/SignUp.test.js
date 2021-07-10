describe('Signup page should contain', () => {
    test.todo('email, password,confirm password inputs are present')
    test.todo('submit button is present')
    test.todo('route to OTP screen on successful submission')
})

describe('Button in Signup screen should be ', () => {
    test.todo('disabled if email is empty or invalid')
    test.todo('disabled if password is empty')
    test.todo('disabled if confirm password is empty')
    test.todo('disabled if password does not match with confirm password')
    test.todo(`disabled if all the fields are filled, but any field's validation has failed`)
    test.todo(`enabled if all the fields are not empty and validated`)
  })
