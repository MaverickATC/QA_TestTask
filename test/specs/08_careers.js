const assert = require('assert')

const mainPage = require('../page/main.page.js')

describe.skip('GitHub regression test', () => {
    it('Test case 8: careers', () => {
        browser.url(mainPage.url)
        
        mainPage.careersButton.click();

        $('a[href="#positions"]').click();

        let result = ""
        for (let i = 1; i <= 11; i++) {
            const elementSelector = "//div[@class='pb-md-6']//div[" + i +"]//div//button//h3"
            const element = $(elementSelector);
            result += "\t" + element.getText() + "\n"
        }
        console.log(result);
        browser.pause(3000)

    })
})