const assert = require('assert')

const mainPage = require('../page/main.page.js')
const joinPage = require('../page/join.page.js')
const helper = require('../helper.js')

describe.skip('GitHub regression test', () => {
    it('Test case 1: registration on the top of homepage', () => {
        browser.url(mainPage.url)
        
        mainPage.upperUserInput.setValue(helper.generateString(10))
        browser.pause(2000)
        const email = helper.generateString(5) + "@" + helper.generateString(4) + ".com";
        mainPage.upperEmailInput.setValue(email)
        browser.pause(2000)
        mainPage.upperPasswordInput.setValue(helper.generateString(15))
        browser.pause(2000)

        mainPage.upperSignupButton.click();
        
        expect(browser).toHaveUrl(joinPage.url);
        browser.pause(1000)
        expect(joinPage.verifyAccountHeader).toBeDisplayed();
        browser.pause(1000)

    })
})