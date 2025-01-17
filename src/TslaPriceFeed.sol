//SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import {FunctionsRequest} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsRequest.sol";
import {FunctionsClient} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/FunctionsClient.sol";
import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";

contract TslaPriceFeed is FunctionsClient {
    using FunctionsRequest for FunctionsRequest.Request;

    mapping(bytes32 requestId => address requester)
        private s_requestIdToRequest;

    string s_priceFeedSource;
    uint256 s_startedAt;
    uint256 public s_tslaPrice;
    uint64 s_secretVersion;
    uint8 s_secretSlot;

    bytes32 s_donID;

    uint64 immutable i_subId;

    uint32 private constant GAS_LIMIT = 300_000;

    constructor(
        string memory priceFeedSource,
        address functionsRouter,
        uint64 subId,
        uint64 secretVersion,
        uint8 secretSlot,
        bytes32 donId
    ) FunctionsClient(functionsRouter) {
        s_startedAt = block.timestamp;
        s_priceFeedSource = priceFeedSource;
        i_subId = subId;
        s_secretSlot = secretSlot;
        s_secretVersion = secretVersion;
        s_donID = donId;
    }

    function sendPriceRequest() internal returns (bytes32 requestId) {
        FunctionsRequest.Request memory req;
        req.initializeRequestForInlineJavaScript(s_priceFeedSource); // Initialize the request with JS code
        req.addDONHostedSecrets(s_secretSlot, s_secretVersion);

        requestId = _sendRequest(req.encodeCBOR(), i_subId, GAS_LIMIT, s_donID);
        s_requestIdToRequest[requestId] = msg.sender;
    }

    function fulfillRequest(
        bytes32 /** */,
        bytes memory response,
        bytes memory /* err */
    ) internal override {
        s_tslaPrice = uint256(bytes32(response));
    }

    function latestRoundData()
        external
        returns (
            uint80 roundId,
            int256 answer,
            uint256 startedAt,
            uint256 updatedAt,
            uint80 answeredInRound
        )
    {
        startedAt = s_startedAt;
        updatedAt = block.timestamp;
        roundId = 0;
        answeredInRound = 0;
        sendPriceRequest();
        answer = int256(s_tslaPrice);
    }
}
