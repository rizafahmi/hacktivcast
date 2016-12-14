import React from 'react'
import { Toolbar, NavItem, Space, Heading, Button } from 'rebass'

class Menu extends React.Component {
  render () {
    return (
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
    )
  }
}

module.exports = Menu
