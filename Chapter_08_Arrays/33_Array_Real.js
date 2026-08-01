let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera doesn't support Automation Now!");
    }
}