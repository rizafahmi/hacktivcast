import React from 'react'
import { Card, CardImage, Heading, Text, Button } from 'rebass'

class Show extends React.Component {
  render () {
    return (
      <Card rounded={true} width={418}>
        <CardImage src='http://placehold.it/512/08e/fff' />
        <Heading level={3} size={3} style={{marginBottom: 20}}>
          HACKTIVcast Series
        </Heading>
        <Text style={{marginBottom: 20}}>
          Sebuah screencast series tentang pemrograman NodeJS, JavaScript, GIT, GitHub, VIM, editor dan teknologi lain yang terkait.
        </Text>
        <Button
          href='#'
          backgroundColor='warning'
          big={true}
          pill={true}
          style={{display: 'block', textAlign: 'center'}}
          rounded={true}>
          Watch
        </Button>
      </Card>

    )
  }
}

module.exports = Show
