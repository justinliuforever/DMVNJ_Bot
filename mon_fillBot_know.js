var fs = require('fs');
const puppeteer = require('puppeteer-extra')

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())


async function start(){

const browser = await puppeteer.launch({ 
    headless: false ,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    //userDataDir: "C:/Users/Admin/AppData/Local/Google/Chrome/User Data/Default"
    args:[
        '/Users/liuqinyuan/Library/Application Support/Google/Chrome/Default']

});
const page = await browser.newPage();
await page.setViewport({ width: 1266, height: 868});


// wait link exist in test.txt
links = "";
async function waitForTarget(){
    check = true; 
    while (check) {
        try {  
            var data = fs.readFileSync('./discord_bot/know_target.txt', 'utf8');
            console.log('wait...'); 
            links = data.toString();  
        } catch(e) {
            console.log('Error:', e.stack);
        }

        if (links != ""){
            check = false
            return 
        }

        await new Promise(resolve => setTimeout(resolve, 5)); //ms
        }
    }

    
    await waitForTarget()
    await console.log(links)

//gain the link, goto the link and begin to fill form
try {
    await page.waitForTimeout(10);
    const indx = links.indexOf("https");
    const pageUrl = links.substring(indx)

    //await page.waitForTimeout(3000);

    await page.goto(pageUrl);
    //await page.waitForSelector(".col.availableTimeslot", {timeout: 10000})
    //await page.click(".col.availableTimeslot")
    //await page.waitForSelector("#firstName", {timeout: 10000})

    } catch (e) {
        console.log('page load failed');
        await browser.close();
        return null;
    }

//random email
function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }
number = between(1000,9999)
async function initial_typeWord(){
await page.waitForSelector('#email')
//await page.type("#email",number+"@gmail.com",{delay: 0});
await page.type("#email","xxx@gmail.com",{delay: 0});

await page.waitForSelector('#driverLicense')
await page.type("#driverLicense","F03781220005011",{delay: 0});

await page.waitForSelector('#phone')
//await page.type("#phone",number+"101569",{delay: 0});
await page.type("#phone","1100101569",{delay: 0});
await console.log("test email: "+"xx@gmail.com"+"@gmail.com");

await page.waitForSelector('#firstName')
await page.type("#firstName","jhasd",{delay: 0});

await page.waitForSelector('#lastName')
await page.type("#lastName","asdf"),{delay: 0};

await page.waitForSelector('#test')
await page.click('#test')
await page.select('#test', 'Auto')

//slice page
await page.evaluate(_ => {
    window.scrollBy(0, window.innerHeight);
  });

//await page.click('[name="Customer.ReceiveTexts"]', {delay: 20});
await page.click('[name="Attest"]', {delay: 20});
await page.click('[name="PtaAttest"]', {delay: 20});

//await page.waitForTimeout(6000);
//await console.log(page.url()+"      "+number+"@gmail.com")


/////////////////////////////////
//wait for recaptcha exist
const frame = await page.frames().find(f => f.name().startsWith("a-"));
await frame.waitForSelector('div.recaptcha-checkbox-border');
console.log("Captcha exists!");
//await page.waitForTimeout(100);

//click recaptcha 
console.log("click");
await frame.click('div.recaptcha-checkbox-border')
await page.waitForTimeout(500);

// click submit
await page.click(".btn.btn-secondary.g-recaptcha"); 



//////////////////////////////
}

try {
    await console.log('type word'); 
    await initial_typeWord()

    } catch (e) {
        console.log('fill form fail');
        await browser.close();
    }



await page.waitForTimeout(10000);
//await browser.close();

};
start()

//setInterval(start, 3000)

