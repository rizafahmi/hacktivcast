import React from 'react'
import { Block, Button, Card, CardImage, Heading, Text } from 'rebass'
import { Flex, Box } from 'reflexbox'

class Shows extends React.Component {
  render () {
    return (
      <Flex align='center' wrap justify='space-between'>
        <Card rounded={true} width={418}>
          <CardImage src='http://placehold.it/512/08e/fff' />
          <Heading level={3} size={3}>
            HACKTIVcast Series
          </Heading>
          <Text>
            Sebuah screencast series tentang pemrograman NodeJS, JavaScript, GIT, GitHub, VIM, editor dan teknologi lain yang terkait.
          </Text>
          <Block>
            <Button
              href='#'
              backgroundColor='warning'
              big={true}
              rounded={true}>
              View
            </Button>
          </Block>
        </Card>
        <Card rounded width={418}>
          <CardImage src='http://placehold.it/512/08e/fff' />
          <Heading level={3} size={3}>
            HACKTIVcast Labs
          </Heading>
          <Text>
            HACKTIVcast Labs adalah sebuah _unscripted live coding session_ dengan para expert, technology enthusiast dan coder professional.
          </Text>
        </Card>
      </Flex>
    )
  }
}

module.exports = Shows
