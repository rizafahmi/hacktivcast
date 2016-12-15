import React from 'react'
<<<<<<< HEAD
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
=======
import { Toolbar, NavItem, Space, Heading, Button } from 'rebass'
>>>>>>> use-rebass

class Menu extends React.Component {
  render () {
    return (
<<<<<<< HEAD
      <AppBar title='HACKTIVcast' iconElementRight={<FlatButton label="Join Hactiv8" />} />
=======
      <Toolbar backgroundColor='orange'>
        <NavItem is='h1'>
          <Heading level={2}>
            HACKTIVcast
          </Heading>
        </NavItem>
        <Space auto x={1} />
        <NavItem>
          <Button
            backgroundColor='gray'
            color='orange'
            rounded
            big={true}
            inverted
            pill={true}>
            Join HACKTIV8
          </Button>
        </NavItem>
      </Toolbar>
>>>>>>> use-rebass
    )
  }
}

module.exports = Menu
