
describe('CDP', () => {
    it('Network.responseReceived', () => {
        browser.cdp('Network', 'enable')
        browser.on('Network.responseReceived', (params) => {
            console.log(`Loaded ${params.response.url}`)
        })
        browser.url('https://www.google.com')
    });
});


