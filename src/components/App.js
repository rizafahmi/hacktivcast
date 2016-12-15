import React from 'react'
<<<<<<< HEAD
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
=======
import { Container, Footer } from 'rebass'
>>>>>>> use-rebass

const Menu = require('./Menu.js')
const Description = require('./Description.js')
const Shows = require('./Shows.js')

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
<<<<<<< HEAD
      <MuiThemeProvider>
        <div>
          <Menu />
          <Description />
          <Shows />
        </div>
      </MuiThemeProvider>
=======
      <Container>
        <Description />
        <Shows />
        <Footer>
          © 2016 HACKTIV8
        </Footer>
      </Container>
>>>>>>> use-rebass
    )
  }
}

module.exports = App
