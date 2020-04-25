const assert = require('assert')

const mainPage = require('../page/main.page.js')
const signinPage = require('../page/signin.page.js')
const resetPage = require('../page/password_reset.page.js')
const navBar = require('../page/navbar.page.js')
const helper = require('../helper.js')

describe.skip('GitHub regression test', () => {
    it('Test case 4.1: reset password negative', () => {
        browser.url(mainPage.url)
        browser.pause(2000)
        navBar.navbarSigninButton.click();

        signinPage.forgotPasswordButton.click();

        const wrongEmail = helper.generateString(5) + "@" + helper.generateString(4) +".com"
        const wrongText = helper.generateString(15)

        resetPage.emailInput.setValue(wrongEmail);
        browser.pause(2000)
        resetPage.sendButton.click();
        browser.pause(2000)
        expect(resetPage.errorMessage).toBeDisplayed();
        
        browser.pause(2000)
        resetPage.closeErrorButton.click();

        resetPage.emailInput.setValue(wrongText);
        browser.pause(2000)
        resetPage.sendButton.click();
        browser.pause(2000)
        expect(resetPage.errorMessage).toBeDisplayed();

        browser.pause(2000)
        resetPage.closeErrorButton.click();
        browser.pause(2000)

    })

    it('Test case 4.2: reset password positive', () => {
        browser.url(mainPage.url)
        browser.pause(2000)
        navBar.navbarSigninButton.click();

        signinPage.forgotPasswordButton.click();

        resetPage.emailInput.setValue(helper.testUserData.testEmail);
        browser.pause(2000)
        resetPage.sendButton.click();
        browser.pause(2000)
        
        expect(resetPage.returnToSigninButton).toBeDisplayed();
        browser.pause(2000)

    })
})