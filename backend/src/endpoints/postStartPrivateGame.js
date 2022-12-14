const {queueNewGame} = require("../gameQueuer.js")
const getCorsHeaders = require("../getCorsHeaders");

async function lambdaHandler(event) {
    let requestBody = JSON.parse(event.body)
    let response = await postStartPrivateGame(requestBody.playerId, requestBody.playerColour)
    return {
        statusCode: response.statusCode,
        headers: getCorsHeaders(event.headers.origin),
        body: JSON.stringify(response.responseBody),
    };
}

async function postStartPrivateGame(playerId, playerColour) {
    let allowWhiteOpponents = playerColour === "either" || playerColour === "black"
    let allowBlackOpponents = playerColour === "either" || playerColour === "white"
    let newGameId = await queueNewGame(playerId, allowWhiteOpponents, allowBlackOpponents, true)

    return {
        statusCode: 200,
        responseBody: {gameId: newGameId}
    }
}

module.exports = {
    lambdaHandler: lambdaHandler
}
