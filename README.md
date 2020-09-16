# cra-typescript-lambda-demo

https://www.youtube.com/watch?v=3ldSM98nCHI

## Steps

Install dev dependency `netlify-lambda`

```shell
yarn add -D netlify-lambda
```

Create lambda source folder:

```shell
mkdir src/foo-lambda
touch src/foo-lambda/hello.js
```

Create basic handler for `hello.js`:

```js
exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: 'Hello, World'
  })
}
```