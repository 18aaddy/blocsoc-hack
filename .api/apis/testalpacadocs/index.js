"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'testalpacadocs/2.0.0 (api/6.1.1)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * This endpoint provides data about the corporate actions for each given symbol over a
     * specified time period.
     *
     *
     * @summary Corporate actions
     */
    SDK.prototype.corporateActions = function (metadata) {
        return this.core.fetch('/v1beta1/corporate-actions', 'get', metadata);
    };
    /**
     * Get the latest forex rates for the given currency pairs.
     *
     *
     * @summary Latest rates for currency pairs
     */
    SDK.prototype.latestRates = function (metadata) {
        return this.core.fetch('/v1beta1/forex/latest/rates', 'get', metadata);
    };
    /**
     * Get historical forex rates for the given currency pairs in the given time interval, and
     * at the given timeframe (snapshot frequency).
     *
     *
     * @summary Historical rates for currency pairs
     */
    SDK.prototype.rates = function (metadata) {
        return this.core.fetch('/v1beta1/forex/rates', 'get', metadata);
    };
    /**
     * Get the image of the company logo for the given symbol
     *
     * @summary Logos
     */
    SDK.prototype.logos = function (metadata) {
        return this.core.fetch('/v1beta1/logos/{symbol}', 'get', metadata);
    };
    /**
     * Returns latest news articles across stocks and crypto. By default returns latest 10 news
     * articles.
     *
     * @summary News articles
     */
    SDK.prototype.news = function (metadata) {
        return this.core.fetch('/v1beta1/news', 'get', metadata);
    };
    /**
     * The historical option bars API provides aggregates for a list of option symbols between
     * the specified dates.
     *
     * The returned results are sorted by symbol first then by bar timestamp.
     * This means that you are likely to see only one symbol in your first response if there
     * are enough bars for that symbol to hit the limit you requested on that request.
     *
     * In these situations if you keep requesting again with the `next_page_token` you will
     * eventually reach the next symbols if any bars were found for them.
     *
     * @summary Historical bars
     */
    SDK.prototype.optionBars = function (metadata) {
        return this.core.fetch('/v1beta1/options/bars', 'get', metadata);
    };
    /**
     * Returns the mapping between the option exchange codes and the corresponding exchanges
     * names.
     *
     *
     * @summary Exchange codes
     */
    SDK.prototype.optionMetaExchanges = function () {
        return this.core.fetch('/v1beta1/options/meta/exchanges', 'get');
    };
    /**
     * The latest multi quotes endpoint provides the latest bid and ask prices for each given
     * contract symbol.
     *
     *
     * @summary Latest quotes
     */
    SDK.prototype.optionLatestQuotes = function (metadata) {
        return this.core.fetch('/v1beta1/options/quotes/latest', 'get', metadata);
    };
    /**
     * The latest multi trades endpoint provides the latest historical trade data for multiple
     * given contract symbols.
     *
     *
     * @summary Latest trades
     */
    SDK.prototype.optionLatestTrades = function (metadata) {
        return this.core.fetch('/v1beta1/options/trades/latest', 'get', metadata);
    };
    /**
     * The historical option trades API provides trade data for a list of contract symbols
     * between the specified dates up to 7 days ago.
     *
     * The returned results are sorted by symbol first then by trade timestamp.
     * This means that you are likely to see only one symbol in your first response if there
     * are enough trades for that symbol to hit the limit you requested on that request.
     *
     * In these situations if you keep requesting again with the `next_page_token` you will
     * eventually reach the next symbols if any trades were found for them.
     *
     * @summary Historical trades
     */
    SDK.prototype.optionTrades = function (metadata) {
        return this.core.fetch('/v1beta1/options/trades', 'get', metadata);
    };
    /**
     * The snapshots endpoint provides the latest trade, latest quote and greeks for each given
     * contract symbol.
     *
     *
     * @summary Snapshots
     */
    SDK.prototype.optionSnapshots = function (metadata) {
        return this.core.fetch('/v1beta1/options/snapshots', 'get', metadata);
    };
    /**
     * The option chain endpoint provides the latest trade, latest quote and greeks for each
     * contract symbol of the underlying symbol.
     *
     *
     * @summary Option chain
     */
    SDK.prototype.optionChain = function (metadata) {
        return this.core.fetch('/v1beta1/options/snapshots/{underlying_symbol}', 'get', metadata);
    };
    /**
     * Returns the most active stocks by volume or trade count. By default returns the top 10
     * symbols by volume.
     *
     *
     * @summary Most active stocks
     */
    SDK.prototype.mostActives = function (metadata) {
        return this.core.fetch('/v1beta1/screener/stocks/most-actives', 'get', metadata);
    };
    /**
     * Returns the top market movers (gainers and losers). The change for each symbol is
     * calculated
     * from the previous closing price and the latest closing price.
     *
     * For stocks the endpoint resets at market open, until then it shows the last market day's
     * movers.
     * The data is split adjusted. Only tradable symbols are included.
     *
     * For crypto the endpoint resets at midnight.
     *
     * @summary Top market movers
     */
    SDK.prototype.movers = function (metadata) {
        return this.core.fetch('/v1beta1/screener/{market_type}/movers', 'get', metadata);
    };
    /**
     * The crypto bars API provides historical aggregates for a list of crypto symbols between
     * the specified dates.
     *
     * @summary Historical bars
     */
    SDK.prototype.cryptoBars = function (metadata) {
        return this.core.fetch('/v1beta3/crypto/{loc}/bars', 'get', metadata);
    };
    /**
     * The latest multi bars endpoint returns the latest minute-aggregated historical bar data
     * for each of the crypto symbols provided.
     *
     *
     * @summary Latest bars
     */
    SDK.prototype.cryptoLatestBars = function (metadata) {
        return this.core.fetch('/v1beta3/crypto/{loc}/latest/bars', 'get', metadata);
    };
    /**
     * The latest orderbook endpoint returns the latest bid and ask orderbook for the crypto
     * symbols provided.
     *
     *
     * @summary Latest orderbook
     */
    SDK.prototype.cryptoLatestOrderbooks = function (metadata) {
        return this.core.fetch('/v1beta3/crypto/{loc}/latest/orderbooks', 'get', metadata);
    };
    /**
     * The latest quotes endpoint returns the latest bid and ask prices for the crypto symbols
     * provided.
     *
     *
     * @summary Latest quotes
     */
    SDK.prototype.cryptoLatestQuotes = function (metadata) {
        return this.core.fetch('/v1beta3/crypto/{loc}/latest/quotes', 'get', metadata);
    };
    /**
     * The latest trades endpoint returns the latest trade data for the crypto symbols
     * provided.
     *
     *
     * @summary Latest trades
     */
    SDK.prototype.cryptoLatestTrades = function (metadata) {
        return this.core.fetch('/v1beta3/crypto/{loc}/latest/trades', 'get', metadata);
    };
    /**
     * The crypto quotes API provides historical quote data for a list of crypto symbols
     * between the specified dates.
     *
     * @summary Historical quotes
     */
    SDK.prototype.cryptoQuotes = function (metadata) {
        return this.core.fetch('/v1beta3/crypto/{loc}/quotes', 'get', metadata);
    };
    /**
     * The latest orderbook endpoint returns the latest trade, latest quote, latest minute bar,
     * latest daily bar, and previous daily bar data for crypto symbols.
     *
     *
     * @summary Snapshots
     */
    SDK.prototype.cryptoSnapshots = function (metadata) {
        return this.core.fetch('/v1beta3/crypto/{loc}/snapshots', 'get', metadata);
    };
    /**
     * The crypto trades API provides historical trade data for a list of crypto symbols
     * between the specified dates.
     *
     * @summary Historical trades
     */
    SDK.prototype.cryptoTrades = function (metadata) {
        return this.core.fetch('/v1beta3/crypto/{loc}/trades', 'get', metadata);
    };
    /**
     * The historical auctions endpoint provides auction prices for the stock symbol between
     * the specified dates.
     *
     *
     * @summary Historical auctions
     */
    SDK.prototype.stockAuctions = function (metadata) {
        return this.core.fetch('/v2/stocks/auctions', 'get', metadata);
    };
    /**
     * The historical stock bars API provides aggregates for a list of stock symbols between
     * the specified dates.
     *
     * The returned results are sorted by symbol first then by bar timestamp.
     * This means that you are likely to see only one symbol in your first response if there
     * are enough bars for that symbol to hit the limit you requested on that request.
     *
     * In these situations if you keep requesting again with the `next_page_token` you will
     * eventually reach the next symbols if any bars were found for them.
     *
     * @summary Historical bars
     */
    SDK.prototype.stockBars = function (metadata) {
        return this.core.fetch('/v2/stocks/bars', 'get', metadata);
    };
    /**
     * The latest multi bars endpoint returns the latest minute-aggregated historical bar data
     * for the ticker symbols provided.
     *
     *
     * @summary Latest bars
     */
    SDK.prototype.stockLatestBars = function (metadata) {
        return this.core.fetch('/v2/stocks/bars/latest', 'get', metadata);
    };
    /**
     * Returns the mapping between the condition codes and names.
     *
     *
     * @summary Condition codes
     */
    SDK.prototype.stockMetaConditions = function (metadata) {
        return this.core.fetch('/v2/stocks/meta/conditions/{ticktype}', 'get', metadata);
    };
    /**
     * Returns the mapping between the stock exchange codes and the corresponding exchanges
     * names.
     *
     *
     * @summary Exchange codes
     */
    SDK.prototype.stockMetaExchanges = function () {
        return this.core.fetch('/v2/stocks/meta/exchanges', 'get');
    };
    /**
     * The historical stock quotes API provides quote data for a list of stock symbols between
     * the specified dates.
     *
     * The returned results are sorted by symbol first then by quote timestamp.
     * This means that you are likely to see only one symbol in your first response if there
     * are enough quotes for that symbol to hit the limit you requested on that request.
     *
     * In these situations if you keep requesting again with the `next_page_token` you will
     * eventually reach the next symbols if any quotes were found for them.
     *
     * @summary Historical quotes
     */
    SDK.prototype.stockQuotes = function (metadata) {
        return this.core.fetch('/v2/stocks/quotes', 'get', metadata);
    };
    /**
     * The latest multi quotes endpoint provides the latest bid and ask prices for each given
     * ticker symbols.
     *
     *
     * @summary Latest quotes
     */
    SDK.prototype.stockLatestQuotes = function (metadata) {
        return this.core.fetch('/v2/stocks/quotes/latest', 'get', metadata);
    };
    /**
     * The snapshot endpoint for multiple tickers provides the latest trade, latest quote,
     * minute bar daily bar, and previous daily bar data for each given ticker symbol.
     *
     *
     * @summary Snapshots
     */
    SDK.prototype.stockSnapshots = function (metadata) {
        return this.core.fetch('/v2/stocks/snapshots', 'get', metadata);
    };
    /**
     * The historical stock trades API provides trade data for a list of stock symbols between
     * the specified dates.
     *
     * The returned results are sorted by symbol first then by trade timestamp.
     * This means that you are likely to see only one symbol in your first response if there
     * are enough trades for that symbol to hit the limit you requested on that request.
     *
     * In these situations if you keep requesting again with the `next_page_token` you will
     * eventually reach the next symbols if any trades were found for them.
     *
     * @summary Historical trades
     */
    SDK.prototype.stockTrades = function (metadata) {
        return this.core.fetch('/v2/stocks/trades', 'get', metadata);
    };
    /**
     * The latest multi trades endpoint provides the latest historical trade data for multiple
     * given ticker symbols.
     *
     *
     * @summary Latest trades
     */
    SDK.prototype.stockLatestTrades = function (metadata) {
        return this.core.fetch('/v2/stocks/trades/latest', 'get', metadata);
    };
    /**
     * The historical auctions endpoint provides auction prices for a list of stock symbols
     * between the specified dates.
     *
     *
     * @summary Historical auctions (single)
     */
    SDK.prototype.stockAuctionSingle = function (metadata) {
        return this.core.fetch('/v2/stocks/{symbol}/auctions', 'get', metadata);
    };
    /**
     * The historical stock bars API provides aggregates for the stock symbol between the
     * specified dates.
     *
     * @summary Historical bars (single symbol)
     */
    SDK.prototype.stockBarSingle = function (metadata) {
        return this.core.fetch('/v2/stocks/{symbol}/bars', 'get', metadata);
    };
    /**
     * The latest stock bars endpoint returns the latest minute-aggregated historical bar for
     * the requested security.
     *
     *
     * @summary Latest bar (single symbol)
     */
    SDK.prototype.stockLatestBarSingle = function (metadata) {
        return this.core.fetch('/v2/stocks/{symbol}/bars/latest', 'get', metadata);
    };
    /**
     * The historical stock quotes API provides quote data for a stock symbol between the
     * specified dates.
     *
     * @summary Historical quotes (single symbol)
     */
    SDK.prototype.stockQuoteSingle = function (metadata) {
        return this.core.fetch('/v2/stocks/{symbol}/quotes', 'get', metadata);
    };
    /**
     * The latest quotes endpoint provides the latest bid and ask prices for a given ticker
     * symbol.
     *
     *
     * @summary Latest quote (single symbol)
     */
    SDK.prototype.stockLatestQuoteSingle = function (metadata) {
        return this.core.fetch('/v2/stocks/{symbol}/quotes/latest', 'get', metadata);
    };
    /**
     * The snapshot endpoint provides the latest trade, latest quote, minute bar daily bar, and
     * previous daily bar data for a given ticker symbol.
     *
     *
     * @summary Snapshot (single symbol)
     */
    SDK.prototype.stockSnapshotSingle = function (metadata) {
        return this.core.fetch('/v2/stocks/{symbol}/snapshot', 'get', metadata);
    };
    /**
     * The historical stock trades API provides trade data for a stock symbol between the
     * specified dates.
     *
     * @summary Historical trades (single symbol)
     */
    SDK.prototype.stockTradeSingle = function (metadata) {
        return this.core.fetch('/v2/stocks/{symbol}/trades', 'get', metadata);
    };
    /**
     * The latest trades endpoint provides the latest trade data for a given ticker symbol.
     *
     *
     * @summary Latest trade (single symbol)
     */
    SDK.prototype.stockLatestTradeSingle = function (metadata) {
        return this.core.fetch('/v2/stocks/{symbol}/trades/latest', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
