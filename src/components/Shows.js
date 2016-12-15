import React from 'react'
import { Flex } from 'reflexbox'

import Show from './Show.js'

class Shows extends React.Component {
  render () {
    return (
      <Flex align='center' wrap justify='space-between'>
        <Show id={1} />
      </Flex>
    )
  }
}

module.exports = Shows
