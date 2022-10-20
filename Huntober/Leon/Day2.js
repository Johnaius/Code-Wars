// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet

// pass in URl as a string
// return a string whats between the // and .com
function domainName(url){
    return url.replace('http://','')
      .replace('https://','')
      .replace('www.','')
      .split('.')[0]
   
   }

const assert = require('assert');
describe("Huntober Challenge Day 2:", () => {
    it("Test 1", () => { assert.strictEqual(domainName("http://github.com/carbonfive/raygun"), 'github' ) });
    it("Test 2", () => { assert.deepEqual(domainName("http://www.zombie-bites.com"), 'zombie-bites' ) });
    it("Test 3", () => { assert.deepEqual(domainName("https://www.cnet.com"), 'cnet') });
});
   console.log(domainName("http://github.com/carbonfive/raygun"), 'github' )
   console.log(domainName("http://www.zombie-bites.com"), 'zombie-bites' )
   console.log(domainName("https://www.cnet.com"), 'cnet')