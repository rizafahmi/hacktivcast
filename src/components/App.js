import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const Menu = require('./Menu.js')
const Description = require('./Description.js')
const Shows = require('./Shows.js')

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <Menu />
          <Description />
          <Shows />
        </div>
      </MuiThemeProvider>
    )
  }
}

module.exports = App
