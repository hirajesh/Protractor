describe("This My Test Protractor Script", function() {
	
	it("This Is My Second Script", function() {
		
		browser.ignoreSynchronization = true;
		browser.get("http://182.18.161.229/CHMSREV/Account/Login?Role=Doctor");
		browser.driver.manage().window().maximize();
		element(by.id("Email")).sendKeys("rajesh");
		element(by.id("Password")).sendKeys("123");
		element(by.xpath("/html/body/div[1]/div/div/div[2]/form/div[3]/div[2]/button")).click();
		browser.driver.sleep(2000);
		element(by.xpath("/html/body/section/div/section[1]/div[1]/table/tbody/tr[2]/td[1]/div/a/b/span")).click();
	    element(by.id("txtPatientName")).sendKeys("Raja");
	    
	});
	
});