describe("This For Login Function", function() {
	
	it("This is my first script", function() {
	 browser.get('http://182.18.161.229/multihospital_new');
     broswer.driver.element(by.xpath('//*[@id="form1"]/div[5]/div[2]/div[3]/label/a')).click();
	 broswer.driver.element(by.id('txtusername')).sendKeys(amirtha);
	 broswer.driver.element(by.id('txtpassword')).sendkeys(123);
	});
	
})

