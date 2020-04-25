const assert = require('assert')

const mainPage = require('../page/main.page.js')
const navBar = require('../page/navbar.page.js')

describe.skip('GitHub regression test', () => {
    it('Test case 6: find webdriverio repo', () => {
        browser.url(mainPage.url)
        
        navBar.navbarSearchInput.setValue("webdriverio"); 
        browser.pause(2000)
        navBar.navbarSearchInput.click({y:50});
        browser.pause(2000)
        
        const typeScriptFilter = $("//a[@href='/search?l=TypeScript&q=webdriverio&type=Repositories']")

        typeScriptFilter.scrollIntoView();
        browser.pause(2000)
        typeScriptFilter.click();
        browser.pause(2000)

        $('div.codesearch-results ul li a').click();
        expect(browser).toHaveUrl('webdriverio', {'containing': true});
        
        browser.pause(2000)

    })
})