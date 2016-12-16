import React from 'react'

class Description extends React.Component {
  render () {
    return (
      <div className='ph3 ph5-ns bg-near-white pb5'>
        <div className='cf mw9 center tc-m'>
          <div className='pb3 pb4-ns pt4 pt5-ns mt4 fl-l w-50-l v-mid'>
            <h1 className='tc'>HACKTIVcast</h1>
            <h2 className='f5 tc fw4'>Sebuah screencast series tentang pemrograman NodeJS, JavaScript, GIT, GitHub, VIM, editor dan teknologi lain yang terkait.</h2>
          </div>
          <div className='fl-l center w-50-l tl tc-ns pt3 pt4-m pt6-l'>
            <img src='http://placehold.it/256' />
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Description
