import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Title } from 'react-native-paper'
import { connect } from 'react-redux'
import CardListItem from './CardListItem'
import { withNavigation } from 'react-navigation'

class CardList extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const { deckId, cards } = this.props

    const deckCards = Object.keys(cards).filter(card => cards[card].deckId === deckId)

      return(
        <View style={styles.list}>
          <Title>Cards ({deckCards.length})</Title>
          {deckCards.map((key) => {
            return <CardListItem key={key} id={key} card={cards[key]} />
          })}
        </View>
      )
    }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ecf0f1',
  }
})

function mapStateToProps({ cards }) {
  return {
    cards,
  }
}

export default withNavigation(connect(mapStateToProps)(CardList))