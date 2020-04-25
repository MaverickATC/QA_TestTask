class SigninPage 
{
    get url()
    {
        return "https://github.com/login"
    }

    get loginInput()
    {
        return $('#login_field')
    }

    get passwordInput()
    {
        return $('#password')
    }

    get signinButton()
    {
        return $('input.btn')
    }
 
    get forgotPasswordButton()
    {
        return $('a.label-link')
    }

}

module.exports = new SigninPage()