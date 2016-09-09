import _ from 'lodash'

const handler = (event, context, callback) => {
  const eventKeys = _.keys(event).sort()

  callback(null, `Yo, I got: ${eventKeys.join(', ')}`)
}

export { handler }
