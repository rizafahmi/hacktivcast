import React from 'react'

const Menu = require('./Menu.js')
const Description = require('./Description.js')
const Shows = require('./Shows.js')
const Footer = require('./Footer.js')

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className=''>
        <Menu />
        <Description />
        <Shows />
        <Footer />
      </div>
    )
  }
}

module.exports = App
