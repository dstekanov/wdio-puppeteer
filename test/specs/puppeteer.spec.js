describe('use Puppeteer', () => {
    it('by wrapping commands with call', () => {
        browser.url('http://json.org')

        const puppeteer = browser.getPuppeteer()
        const page = browser.call(() => puppeteer.pages())[0]
        console.log(browser.call(() => page.title()))
    })

    it('by using async/await', async () => {
        const puppeteer = browser.getPuppeteer()
        const page = (await puppeteer.pages())[0]
        console.log(await page.title())
    })
})