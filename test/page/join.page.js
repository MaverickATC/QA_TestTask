class JoinPage 
{
    get url()
    {
        return "https://github.com/join"
    }

    get verifyAccountHeader()
    {
        return $('h2.f4.mb-3')
    }

    get userNameInput()
    {
        return $('input[name="user[login]"]')
    }

    get userEmailInput()
    {
        return $('input[name="user[email]"]')
    }

    get userPasswordInput()
    {
        return $('input[name="user[password]"]')
    }
}

module.exports = new JoinPage()