class MainPage 
{
    get url()
    {
        return "https://github.com/"
    }
    
    get upperUserInput()
    {
        return $('.home-hero-signup.text-gray-dark input[name="user[login]"]')
    }

    get upperPasswordInput()
    {
        return $('.home-hero-signup.text-gray-dark input[name="user[password]"]')
    }

    get upperEmailInput()
    {
        return $('.home-hero-signup.text-gray-dark input[name="user[email]"]')
    }

    get upperSignupButton()
    {
        return $('.btn-mktg.btn-primary-mktg.btn-large-mktg.f4.btn-block.my-3.js-add-experiment-labels-to-ga-click')
    }

    get lowerUserInput()
    {
        return $('div.d-lg-flex.flex-wrap input[name="user[login]"]')
    }

    get lowerPasswordInput()
    {
        return $('div.d-lg-flex.flex-wrap input[name="user[password]"]')
    }

    get lowerEmailInput()
    {
        return $('div.d-lg-flex.flex-wrap input[name="user[email]"]')
    }

    get lowerSignupButton()
    {
        return $('.btn-mktg.btn-primary-mktg.btn-block.mt-n1')
    }

    get careersButton()
    {
        return $('a[href="/about/careers"]')
    }

}

module.exports = new MainPage()