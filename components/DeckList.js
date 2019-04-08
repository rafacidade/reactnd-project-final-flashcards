import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import DeckListItem from './DeckListItem'

class DeckList extends React.Component{
  constructor(props){
      super(props)
  }

  render(){
    const { decks, cards } = this.props
    const data = Object.keys(decks).map((id) => { return { id } })

    return(
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <DeckListItem
              title={decks[item.id].title}
              deckId={item.id}
              totalCards={Object.keys(cards).filter((card) => cards[card].deckId === item.id).length}              
            />          
          )}
          keyExtractor={(item, index) => index.toString()}
        />
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

function mapStateToProps({ decks, cards }) {
  return {
    decks,
    cards
  }
}

export default connect(mapStateToProps)(DeckList)
