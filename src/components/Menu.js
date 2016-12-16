import React from 'react'

class Menu extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <header className='w-100 pa3 ph5-ns bg-orange'>
        <div className='db dt-ns mw9 center w-100'>
          <div className='db dtc-ns v-mid tl w-50'>
            <a className='dib f5 f4-ns fw6 mt0 mb1 link black' href='/'>HACKTIVcast <div className='dib'> <small className='nowrap f6 mt2 mt3-ns pr2 mid-gray fw2'>by HACKTIV8</small> </div></a>
          </div>
          <nav className='db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns'>
            <a className='f6 fw6 hover-blue link mid-gray mr2 mr3-m mr4-l br-pill bg-white pa2 pl3 pr3' href='#'>Join Bootcamp</a>
          </nav>
        </div>
      </header>
    )
  }
}

module.exports = Menu
