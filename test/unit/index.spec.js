import { expect } from 'chai'
import { handler } from '../../index.js'
import sinon from 'sinon'
import { test } from 'ava'

test('handler', () => {
  const event = { foo: 'foo', bar: 'bar' }
  const callback = sinon.spy()

  handler(event, null, callback)

  expect(callback.called).to.be.true
  expect(callback.calledWith(null, `Yo, I got: bar, foo`)).to.be.true
})
