const assert = require('assert')

const mainPage = require('../page/main.page.js')
const pricingPage = require('../page/pricing_plan.page.js')
const joinPage = require('../page/join.page.js')
const navBar = require('../page/navbar.page.js')
const helper = require('../helper.js')

describe.skip('GitHub regression test', () => {
    it('Test case 5.1: mouse hover elements', () => {
        browser.url(mainPage.url)
        browser.pause(2000)
        navBar.navbarSearchInput.moveTo();

        navBar.navbarWhyGHDropdownButton.moveTo();
        browser.pause(2000)
        navBar.navbarWhyGHDropdown.isDisplayed();
        browser.pause(2000)
        mainPage.upperSignupButton.moveTo();
        
        navBar.navbarExploreDropdownButton.moveTo();
        browser.pause(2000)
        navBar.navbarExploreDropdown.isDisplayed();
        browser.pause(2000)
        mainPage.upperSignupButton.moveTo();
        
        navBar.navbarPricingDropdownButton.moveTo();
        browser.pause(2000)
        navBar.navbarPricingDropdown.isDisplayed();
        browser.pause(2000)
        mainPage.upperSignupButton.moveTo();
        
    })  

    it('Test case 5.2: select free pricing plan', () => {
        browser.url(mainPage.url)
        browser.pause(1000)
    
        navBar.navbarPricingDropdownButton.moveTo();
        browser.pause(1000)
        navBar.navbarPricingButton.click();
        browser.pause(1000)

        pricingPage.joinForFreeButton.scrollIntoView();
        pricingPage.joinForFreeButton.click();

        joinPage.userNameInput.setValue(helper.testUserData.userName);
        joinPage.userEmailInput.setValue(helper.testUserData.testEmail);
        joinPage.userPasswordInput.setValue(helper.testUserData.password);
        browser.pause(2000)

        browser.back();
        browser.pause(2000)

        navBar.navbarSearchInput.scrollIntoView();
        browser.pause(2000)

        navBar.navbarExploreDropdownButton.moveTo();
        browser.pause(1000)
        navBar.navbarExploreGitHubButton.click();
        browser.pause(1000)
        $('nav[role="navigation"] a[href="/topics"]').click();
        browser.pause(1000)
        $('//h1[contains(text(),"Topics")]').isDisplayed();
        browser.pause(2000)

    }) 

    
})