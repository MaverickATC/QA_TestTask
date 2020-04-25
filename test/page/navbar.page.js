class NavBar 
{
    //---------------------------Navbar elements---------------------------//
    get navbarSearchInput()
    {
        return $('input[name="q"]')
    }

    get navbarSigninButton()
    {
        return $('[href="/login"]')
    }

    get navbarWhyGHDropdownButton()
    {
        return $('//*[@class and contains(text(),"Why GitHub")]//parent::details')
    }

    get navbarWhyGHDropdown()
    {
        return $('//*[@class and contains(text(),"Why GitHub")]//parent::details//div')
    }

    get navbarExploreDropdownButton()
    {
        return $('//*[@class and contains(text(),"Explore")]//parent::details')
    }

    get navbarExploreDropdown()
    {
        return $('//*[@class and contains(text(),"Explore")]//parent::details//div')
    }

    get navbarExploreGitHubButton()
    {
        return $('//*[contains(text(),"Explore GitHub ")]')
    }

    get navbarPricingDropdownButton()
    {
        return $('//*[@class and contains(text(),"Pricing")]//parent::details')
    }

    get navbarPricingDropdown()
    {
        return $('//*[@class and contains(text(),"Pricing")]//parent::details//div')
    }

    get navbarPricingButton()
    {
        return $('div.dropdown-menu a[href="/pricing"]')
    }

}

module.exports = new NavBar()