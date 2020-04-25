class PricingPage 
{
    get url()
    {
        return "https://github.com/pricing"
    }

    get joinForFreeButton()
    {
        return $('div.pricing-plans-container.js-pricing-plans-container a[href="/join?plan=free&source=pricing-card-free"]')
    }
    
}

module.exports = new PricingPage()