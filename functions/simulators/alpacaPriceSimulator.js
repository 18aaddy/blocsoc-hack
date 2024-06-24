const requestPriceConfig = require("../configs/tslaPriceConfig.js")
const { simulateScript, decodeResult } = require("@chainlink/functions-toolkit")


async function main() {
    const { responseBytesHexstring, errorString, capturedTerminalOutput } = await simulateScript(requestPriceConfig)
    console.log(`${capturedTerminalOutput}\n`)
    if (responseBytesHexstring) {
        console.log(
            `Response returned by script during local simulation: ${decodeResult(
                responseBytesHexstring,
                requestPriceConfig.expectedReturnType
            ).toString()}\n`
        )
    }
    if (errorString) {
        console.log(`Error returned by simulated script:\n${errorString}\n`)
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});