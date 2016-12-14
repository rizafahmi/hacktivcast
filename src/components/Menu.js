import React from 'react'

class Menu extends React.Component {
  render () {
    return (
      <header className='w-100 pa5 ph5-ns'>
        <div className='db dt-ns mw9 center w-100'>
          <div className='db dtc-ns v-mid tl w-50'>
            <a href='#' className='dib f5 f4-ns fw6 mt0 mb1 link'>HACKTIVcast</a>
          </div>
          <nav className='db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns'>
            <a className='f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l'>Website</a>
            <a className='f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l'>Instagram</a>
            <a className='f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l'>Facebook</a>
            <a className='f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l'>Youtube</a>
          </nav>
        </div>
      </header>
    )
  }
}

module.exports = Menu
