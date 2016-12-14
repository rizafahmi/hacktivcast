import React from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class Menu extends React.Component {
  render () {
    return (
      <AppBar title='HACKTIVcast' iconElementRight={<FlatButton label="Join Hactiv8" />} />
    )
  }
}

module.exports = Menu
