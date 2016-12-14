import React from 'react'
import { Container } from 'rebass'

const Menu = require('./Menu.js')
const Description = require('./Description.js')
const Shows = require('./Shows.js')

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Container>
        <Description />
        <Shows />
      </Container>
    )
  }
}

module.exports = App
