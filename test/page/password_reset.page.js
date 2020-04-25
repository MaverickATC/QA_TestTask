class PasswordResetPage 
{
    get url()
    {
        return "https://github.com/password_reset"
    }

    get emailInput()
    {
        return $('#email_field')
    }

    get sendButton()
    {
        return $('input.btn')
    }

    get errorMessage()
    {
        return $('div.flash.flash-full')
    }

    get closeErrorButton()
    {
        return $('button.flash-close.js-flash-close')
    }

    get returnToSigninButton()
    {
        return $('a.btn')
    }

}

module.exports = new PasswordResetPage()