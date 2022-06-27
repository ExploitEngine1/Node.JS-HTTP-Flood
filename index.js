const readline = require('readline').createInterface({
input: process.stdin,
output: process.stdout
})
readline.question(`[+] Target HTTP/HTTPS:`, target => {
readline.question(`[+] ms between every request:`, ms => {
setInterval(function() {
var XMLHttpRequest = require('xhr2');
var request = new XMLHttpRequest();
request.open('GET', target);
request.send();
console.log(`[+]: Request send to ${target}`);
}, ms); 
readline.close();
})});