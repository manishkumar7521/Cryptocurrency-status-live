var bit = document.getElementById("bitcoin");
var ethe = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
    "async": true,
    "scrossDomin": true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers":{}
}
$.ajax(settings).done(function(response){
    bit.innerHTML = response.bitcoin.usd;
     ethe.innerHTML = response.dogecoin.usd;
      doge.innerHTML = response.
ethereum
.usd;
});