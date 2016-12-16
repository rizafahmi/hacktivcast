import React from 'react'

const axios = require('axios')

const Show = require('./Show.js')

class Shows extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      shows: []
    }
  }
  componentDidMount () {
    axios.get(`/api/v1/shows`)
      .then((data) => {
        this.setState({
          shows: data.data
        })
      })
  }
  render () {
    return (

      <article className='bt b--black-10 bg-washed-blue mid-gray ph3 ph5-ns pv4 pv5-ns'>
        <div className='mw9 center'>
          <h3 className='mt0 f5 f3-ns'>Shows</h3>
      {this.state.shows.map(show) => {
        return <Show />
      }}
        </div>
      </article>
    )
  }
}

module.exports = Shows
