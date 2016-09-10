const index = require('./build/index.js')

index.handler({
  foo: 'foo',
  bar: 'bar'
}, null, (error, result) => console.log(error, result))
