import React from 'react'

class Show extends React.Component {
  render () {
    return (
      <div className='mw7 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
        <div className='tc'>
          <img className='br-100 dib' src='http://placehold.it/128' alt='' />
          <h4 className='f4'>HACKTIVcast Series</h4>
          <hr className='mw3 bb bw1 b--black-10' />
        </div>
        <p className='lh-copy measure center f6 near-gray'>
          Sebuah screencast series tentang pemrograman NodeJS, JavaScript, GIT, GitHub, VIM, editor dan teknologi lain yang terkait.
        </p>
        <div className='pv4 ph2 tc-l'>
          <a href='#' className='f6 tc link dim br-pill ph5 pv3 mb2 dib white bg-gold'>Watch</a>
        </div>
      </div>
    )
  }
}

module.exports = Show
