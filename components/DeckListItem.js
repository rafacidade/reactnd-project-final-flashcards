import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Card as CardPaper, Title, Caption, Divider } from 'react-native-paper'
import { withNavigation } from 'react-navigation'

class DeckListItem extends React.Component {
  render() {
    const { deckId, title, totalCards, navigation } = this.props

    return (
      <CardPaper style={styles.deck}>
        <CardPaper.Content>
          <TouchableOpacity
            onPress={() => navigation.navigate('DeckDetails', { deckId, title })}
          >
            <Title>{title}</Title>
            <Divider style={styles.divider}/>
            <Caption>{totalCards} cards</Caption>
          </TouchableOpacity>
        </CardPaper.Content>
      </CardPaper>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    margin: 10,
    padding: 10,
  },
  divider: {
    marginTop: 10,
  },
})

export default withNavigation(DeckListItem)