import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * This endpoint provides data about the corporate actions for each given symbol over a
     * specified time period.
     *
     *
     * @summary Corporate actions
     */
    corporateActions(metadata?: types.CorporateActionsMetadataParam): Promise<FetchResponse<200, types.CorporateActionsResponse200>>;
    /**
     * Get the latest forex rates for the given currency pairs.
     *
     *
     * @summary Latest rates for currency pairs
     */
    latestRates(metadata: types.LatestRatesMetadataParam): Promise<FetchResponse<200, types.LatestRatesResponse200>>;
    /**
     * Get historical forex rates for the given currency pairs in the given time interval, and
     * at the given timeframe (snapshot frequency).
     *
     *
     * @summary Historical rates for currency pairs
     */
    rates(metadata: types.RatesMetadataParam): Promise<FetchResponse<200, types.RatesResponse200>>;
    /**
     * Get the image of the company logo for the given symbol
     *
     * @summary Logos
     */
    logos(metadata: types.LogosMetadataParam): Promise<FetchResponse<200, types.LogosResponse200>>;
    /**
     * Returns latest news articles across stocks and crypto. By default returns latest 10 news
     * articles.
     *
     * @summary News articles
     */
    news(metadata?: types.NewsMetadataParam): Promise<FetchResponse<200, types.NewsResponse200>>;
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
    optionBars(metadata: types.OptionBarsMetadataParam): Promise<FetchResponse<200, types.OptionBarsResponse200>>;
    /**
     * Returns the mapping between the option exchange codes and the corresponding exchanges
     * names.
     *
     *
     * @summary Exchange codes
     */
    optionMetaExchanges(): Promise<FetchResponse<200, types.OptionMetaExchangesResponse200>>;
    /**
     * The latest multi quotes endpoint provides the latest bid and ask prices for each given
     * contract symbol.
     *
     *
     * @summary Latest quotes
     */
    optionLatestQuotes(metadata: types.OptionLatestQuotesMetadataParam): Promise<FetchResponse<200, types.OptionLatestQuotesResponse200>>;
    /**
     * The latest multi trades endpoint provides the latest historical trade data for multiple
     * given contract symbols.
     *
     *
     * @summary Latest trades
     */
    optionLatestTrades(metadata: types.OptionLatestTradesMetadataParam): Promise<FetchResponse<200, types.OptionLatestTradesResponse200>>;
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
    optionTrades(metadata: types.OptionTradesMetadataParam): Promise<FetchResponse<200, types.OptionTradesResponse200>>;
    /**
     * The snapshots endpoint provides the latest trade, latest quote and greeks for each given
     * contract symbol.
     *
     *
     * @summary Snapshots
     */
    optionSnapshots(metadata: types.OptionSnapshotsMetadataParam): Promise<FetchResponse<200, types.OptionSnapshotsResponse200>>;
    /**
     * The option chain endpoint provides the latest trade, latest quote and greeks for each
     * contract symbol of the underlying symbol.
     *
     *
     * @summary Option chain
     */
    optionChain(metadata: types.OptionChainMetadataParam): Promise<FetchResponse<200, types.OptionChainResponse200>>;
    /**
     * Returns the most active stocks by volume or trade count. By default returns the top 10
     * symbols by volume.
     *
     *
     * @summary Most active stocks
     */
    mostActives(metadata?: types.MostActivesMetadataParam): Promise<FetchResponse<200, types.MostActivesResponse200>>;
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
    movers(metadata: types.MoversMetadataParam): Promise<FetchResponse<200, types.MoversResponse200>>;
    /**
     * The crypto bars API provides historical aggregates for a list of crypto symbols between
     * the specified dates.
     *
     * @summary Historical bars
     */
    cryptoBars(metadata: types.CryptoBarsMetadataParam): Promise<FetchResponse<200, types.CryptoBarsResponse200>>;
    /**
     * The latest multi bars endpoint returns the latest minute-aggregated historical bar data
     * for each of the crypto symbols provided.
     *
     *
     * @summary Latest bars
     */
    cryptoLatestBars(metadata: types.CryptoLatestBarsMetadataParam): Promise<FetchResponse<200, types.CryptoLatestBarsResponse200>>;
    /**
     * The latest orderbook endpoint returns the latest bid and ask orderbook for the crypto
     * symbols provided.
     *
     *
     * @summary Latest orderbook
     */
    cryptoLatestOrderbooks(metadata: types.CryptoLatestOrderbooksMetadataParam): Promise<FetchResponse<200, types.CryptoLatestOrderbooksResponse200>>;
    /**
     * The latest quotes endpoint returns the latest bid and ask prices for the crypto symbols
     * provided.
     *
     *
     * @summary Latest quotes
     */
    cryptoLatestQuotes(metadata: types.CryptoLatestQuotesMetadataParam): Promise<FetchResponse<200, types.CryptoLatestQuotesResponse200>>;
    /**
     * The latest trades endpoint returns the latest trade data for the crypto symbols
     * provided.
     *
     *
     * @summary Latest trades
     */
    cryptoLatestTrades(metadata: types.CryptoLatestTradesMetadataParam): Promise<FetchResponse<200, types.CryptoLatestTradesResponse200>>;
    /**
     * The crypto quotes API provides historical quote data for a list of crypto symbols
     * between the specified dates.
     *
     * @summary Historical quotes
     */
    cryptoQuotes(metadata: types.CryptoQuotesMetadataParam): Promise<FetchResponse<200, types.CryptoQuotesResponse200>>;
    /**
     * The latest orderbook endpoint returns the latest trade, latest quote, latest minute bar,
     * latest daily bar, and previous daily bar data for crypto symbols.
     *
     *
     * @summary Snapshots
     */
    cryptoSnapshots(metadata: types.CryptoSnapshotsMetadataParam): Promise<FetchResponse<200, types.CryptoSnapshotsResponse200>>;
    /**
     * The crypto trades API provides historical trade data for a list of crypto symbols
     * between the specified dates.
     *
     * @summary Historical trades
     */
    cryptoTrades(metadata: types.CryptoTradesMetadataParam): Promise<FetchResponse<200, types.CryptoTradesResponse200>>;
    /**
     * The historical auctions endpoint provides auction prices for the stock symbol between
     * the specified dates.
     *
     *
     * @summary Historical auctions
     */
    stockAuctions(metadata: types.StockAuctionsMetadataParam): Promise<FetchResponse<200, types.StockAuctionsResponse200>>;
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
    stockBars(metadata: types.StockBarsMetadataParam): Promise<FetchResponse<200, types.StockBarsResponse200>>;
    /**
     * The latest multi bars endpoint returns the latest minute-aggregated historical bar data
     * for the ticker symbols provided.
     *
     *
     * @summary Latest bars
     */
    stockLatestBars(metadata: types.StockLatestBarsMetadataParam): Promise<FetchResponse<200, types.StockLatestBarsResponse200>>;
    /**
     * Returns the mapping between the condition codes and names.
     *
     *
     * @summary Condition codes
     */
    stockMetaConditions(metadata: types.StockMetaConditionsMetadataParam): Promise<FetchResponse<200, types.StockMetaConditionsResponse200>>;
    /**
     * Returns the mapping between the stock exchange codes and the corresponding exchanges
     * names.
     *
     *
     * @summary Exchange codes
     */
    stockMetaExchanges(): Promise<FetchResponse<200, types.StockMetaExchangesResponse200>>;
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
    stockQuotes(metadata: types.StockQuotesMetadataParam): Promise<FetchResponse<200, types.StockQuotesResponse200>>;
    /**
     * The latest multi quotes endpoint provides the latest bid and ask prices for each given
     * ticker symbols.
     *
     *
     * @summary Latest quotes
     */
    stockLatestQuotes(metadata: types.StockLatestQuotesMetadataParam): Promise<FetchResponse<200, types.StockLatestQuotesResponse200>>;
    /**
     * The snapshot endpoint for multiple tickers provides the latest trade, latest quote,
     * minute bar daily bar, and previous daily bar data for each given ticker symbol.
     *
     *
     * @summary Snapshots
     */
    stockSnapshots(metadata: types.StockSnapshotsMetadataParam): Promise<FetchResponse<200, types.StockSnapshotsResponse200>>;
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
    stockTrades(metadata: types.StockTradesMetadataParam): Promise<FetchResponse<200, types.StockTradesResponse200>>;
    /**
     * The latest multi trades endpoint provides the latest historical trade data for multiple
     * given ticker symbols.
     *
     *
     * @summary Latest trades
     */
    stockLatestTrades(metadata: types.StockLatestTradesMetadataParam): Promise<FetchResponse<200, types.StockLatestTradesResponse200>>;
    /**
     * The historical auctions endpoint provides auction prices for a list of stock symbols
     * between the specified dates.
     *
     *
     * @summary Historical auctions (single)
     */
    stockAuctionSingle(metadata: types.StockAuctionSingleMetadataParam): Promise<FetchResponse<200, types.StockAuctionSingleResponse200>>;
    /**
     * The historical stock bars API provides aggregates for the stock symbol between the
     * specified dates.
     *
     * @summary Historical bars (single symbol)
     */
    stockBarSingle(metadata: types.StockBarSingleMetadataParam): Promise<FetchResponse<200, types.StockBarSingleResponse200>>;
    /**
     * The latest stock bars endpoint returns the latest minute-aggregated historical bar for
     * the requested security.
     *
     *
     * @summary Latest bar (single symbol)
     */
    stockLatestBarSingle(metadata: types.StockLatestBarSingleMetadataParam): Promise<FetchResponse<200, types.StockLatestBarSingleResponse200>>;
    /**
     * The historical stock quotes API provides quote data for a stock symbol between the
     * specified dates.
     *
     * @summary Historical quotes (single symbol)
     */
    stockQuoteSingle(metadata: types.StockQuoteSingleMetadataParam): Promise<FetchResponse<200, types.StockQuoteSingleResponse200>>;
    /**
     * The latest quotes endpoint provides the latest bid and ask prices for a given ticker
     * symbol.
     *
     *
     * @summary Latest quote (single symbol)
     */
    stockLatestQuoteSingle(metadata: types.StockLatestQuoteSingleMetadataParam): Promise<FetchResponse<200, types.StockLatestQuoteSingleResponse200>>;
    /**
     * The snapshot endpoint provides the latest trade, latest quote, minute bar daily bar, and
     * previous daily bar data for a given ticker symbol.
     *
     *
     * @summary Snapshot (single symbol)
     */
    stockSnapshotSingle(metadata: types.StockSnapshotSingleMetadataParam): Promise<FetchResponse<200, types.StockSnapshotSingleResponse200>>;
    /**
     * The historical stock trades API provides trade data for a stock symbol between the
     * specified dates.
     *
     * @summary Historical trades (single symbol)
     */
    stockTradeSingle(metadata: types.StockTradeSingleMetadataParam): Promise<FetchResponse<200, types.StockTradeSingleResponse200>>;
    /**
     * The latest trades endpoint provides the latest trade data for a given ticker symbol.
     *
     *
     * @summary Latest trade (single symbol)
     */
    stockLatestTradeSingle(metadata: types.StockLatestTradeSingleMetadataParam): Promise<FetchResponse<200, types.StockLatestTradeSingleResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
