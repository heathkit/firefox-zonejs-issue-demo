let webdriver = require('selenium-webdriver');
let capabilities = webdriver.Capabilities.firefox();
driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
driver.get("http://material.angular.io");
driver.executeAsyncScript((cb) => { window.setTimeout(cb,1000) });
