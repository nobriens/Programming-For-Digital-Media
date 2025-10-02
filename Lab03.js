const usdtoEUR = 0.85;
const eurtoUSD = 1.17;
let amount = 1;
let fromCurrency = "USD";
let toCurrency = "USD";
let convert = 0;

function currencyconverter(amount, fromCurrency, toCurrency){

    if(fromCurrency === "USD" && toCurrency === "EUR"){
        convert = amount * usdtoEUR;
    } 
    else if (fromCurrency === "EUR" && toCurrency === "USD") {
        convert = amount * eurtoUSD;
    } 
    console.log(convert);

}

currencyconverter(100, "USD", "EUR");
currencyconverter(50, "EUR", "USD");
currencyconverter(447, "EUR", "USD");