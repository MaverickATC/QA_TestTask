const assert = require('assert')

const joinPage = require('../page/join.page.js')
const helper = require('../helper.js')

describe.skip('GitHub regression test', () => {
    it('Test case 7: enterprise', () => {
        browser.url("https://github.com/enterprise")
        browser.pause(2000)

        $("//div[@class='clearfix']//a[contains(text(),'Start a free trial')]").click();
        browser.pause(1000)

        const enterpriseCloud = $("//*[@class='h1 ' and contains(text(),'Enterprise Cloud')]//parent::div//parent::div//parent::label");
        const enterpriseServer = $("//*[@class='h1 ' and contains(text(),'Enterprise Server')]//parent::div//parent::div//parent::label");
        
        enterpriseCloud.click();
        browser.pause(1000)
        joinPage.userNameInput.clearValue();
        joinPage.userEmailInput.clearValue();
        joinPage.userPasswordInput.clearValue();
        browser.pause(1000)

        joinPage.userNameInput.setValue(helper.testUserData.userName);
        joinPage.userEmailInput.setValue(helper.testUserData.testEmail);
        joinPage.userPasswordInput.setValue(helper.testUserData.password);
        browser.pause(2000)

        browser.back();
        browser.pause(1000)
        enterpriseServer.click();
        browser.pause(1000)

        const userName = $('input[name="contact_request[name]"]');
        const userCompany = $('input[name="contact_request[organization_name]"]')
        const userEmail = $('input[name="contact_request[email]"]')
        userName.setValue(helper.testUserData.userName);
        userCompany.setValue(helper.generateString(7));
        userEmail.setValue(helper.testUserData.testEmail);
        browser.pause(2000)

        const radioButtonSelector = "//fieldset[@id='contact-form-linkto']//div[" + helper.getRandomInt(4) + "]//label//input[@name='contact_request[instance_type]']";
        const radioButton = $(radioButtonSelector)
        radioButton.click();
        browser.pause(2000)

        $('#questions_yes').click();
        browser.pause(2000)

        $('#questions-list').addValue(helper.generateString(85));
        browser.pause(2000)

        $('#contact_request_agreed_to_terms').click();
        browser.pause(2000)

    })
})