import { Handler, Context, Callback, APIGatewayEvent} from 'aws-lambda'

exports.handler = function(event: APIGatewayEvent, context: Context, callback: Callback) {
  callback(null, {
    statusCode: 200,
    body: 'Hello, World TS'
  })
}
