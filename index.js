import _ from 'lodash'
import AWS from 'aws-sdk'

const handler = (event, context, callback) => {
  const eventKeys = _.keys(event).sort()

  callback(null, `Yo, I got: ${eventKeys.join(', ')}`)
}

export { handler }
