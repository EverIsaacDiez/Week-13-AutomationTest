describe('Wikipedia search on Google.com', () => {
    it('Entering "Wikipedia" in the search engine', () => {
      browser.url('https://www.google.com/')
      let input = $('//input[@class="gLFyf gsfi"]')
      input.setValue('Wikipedia')
      let result = $('//h3[@class="LC20lb DKV0Md"]')
      input.keys('Enter')
      result.click()
      browser.pause(5000)
      expect(browser).toHaveUrl('https://es.wikipedia.org/wiki/Wikipedia:Portada')
      expect(browser).toHaveTitle('Wikipedia, la enciclopedia libre')
    })
  })

