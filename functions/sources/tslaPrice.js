if (!secrets.alpacaKey || !secrets.alpacaSecret) {
    throw Error("Need Alpaca keys.");
}

const apiResponse = await Functions.makeHttpRequest({
    url: "https://data.alpaca.markets/v2/stocks/TSLA/quotes/latest",
    headers: {
        'APCA-API-KEY-ID': secrets.alpacaKey,
        'APCA-API-SECRET-KEY': secrets.alpacaSecret
    }
});

if (apiResponse.error) {
    throw Error(`Request Failed: ${apiResponse.error}`);
}

const { data } = apiResponse;

// Validate the response structure
if (!data || !data.quote || !data.quote.ap) {
    throw Error("Invalid response structure from Alpaca.");
}

const latestPrice = data.quote.ap;

// Log the latest price
console.log(`The latest price of TSLA is $${latestPrice}`);

// Encode and return the latest price as a Uint256
return Functions.encodeUint256(Math.round(latestPrice * 1e8));
