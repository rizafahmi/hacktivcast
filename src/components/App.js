import React from 'react'

const Menu = require('./Menu.js')
// const Description = require('./Description.js')
// const Shows = require('./Shows.js')

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Menu />
      </div>
    )
  }
}

module.exports = App
