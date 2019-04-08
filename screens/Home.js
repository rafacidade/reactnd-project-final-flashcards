import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Divider } from 'react-native-paper'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
import { getDecks, getCards } from '../utils/api'
import { receiveDecks, receiveCards } from '../actions'
import DeckList from '../components/DeckList'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
    }
  }

  static navigationOptions = {
    headerTitle: 'Home',
  }

  componentDidMount() {
    const { dispatch } = this.props

    getDecks()
    .then((decks) => dispatch(receiveDecks(decks)))

    getCards()
    .then((cards) => dispatch(receiveCards(cards)))
    .then(() => this.setState(() => ({loading: false})))
  }

  render() {
    if (this.state.loading === true) {
      return <AppLoading />
    }

    return (
      <View style={styles.container}>
        <DeckList />
        <Divider />
        <Button icon='add' onPress={() => this.props.navigation.navigate('NewDeck')} >
          Add New Deck
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
})

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Home)