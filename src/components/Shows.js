import React from 'react'
import { Flex } from 'reflexbox'
import axios from 'axios'

import Show from './Show.js'

class Shows extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      shows: []
    }
  }
  componentDidMount () {
    console.log('Component Shows did mounted!')
    axios.get(`http://localhost:3000/api/v1/shows`)
      .then(res => {
        const shows = res.data
        this.setState({shows})
      })
  }
  render () {
    return (
      <Flex align='center' wrap justify='space-between'>
        {this.state.shows.map(show => {
           return (
             <Show
               key={show.id}
               title={show.title}
               description={show.description}
               thumbnail={show.thumbnail} />
           )
         })}
      </Flex>
    )
  }
}

module.exports = Shows
