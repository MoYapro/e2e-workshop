const { I } = inject();

When('I am on page {string}', (url) => {
I.amOnPage(url)
})

Then('I click {string}', (text) => {
    I.click(text)
})

Then('I open datepicker', (text) => {
    I.click(locate('.hasDatepicker'))
})

Then('I pause', () => {
    pause()
})
