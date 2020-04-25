const assert = require('assert')

const mainPage = require('../page/main.page.js')
const signinPage = require('../page/signin.page.js')
const navBar = require('../page/navbar.page.js')
const helper = require('../helper.js')

describe.skip('GitHub regression test', () => {
    it('Test case 3: sign in via navbar button', () => {
        browser.url(mainPage.url)
        browser.pause(2000)
        navBar.navbarSigninButton.click();

        signinPage.loginInput.setValue(helper.testUserData.userName);
        browser.pause(2000)
        signinPage.passwordInput.setValue(helper.testUserData.password);
        browser.pause(2000)
        signinPage.signinButton.click();
        browser.pause(2000)

        if(browser.getTitle() === "GitHub")
        {
            $('.Header-item.mr-0 summary.Header-link').click();
            browser.pause(2000)
            const userName = $('a.user-profile-link strong')
            userName.isDisplayed();
            if(userName.getText() === helper.testUserData.userName)
            {
                console.log("Signed In Successfully")
                browser.pause(2000)
            }
            else
            {
                console.log("Sign In not successfull by username")
                browser.pause(2000)
            }
        }else
        {
            console.log("Sign In not successfull by page")
            browser.pause(2000)
        }

    })
})