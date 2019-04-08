import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper'

import { generateUID } from '../utils/helpers'
import { addDeck } from '../actions'
import { saveDeck } from '../utils/api'

export class NewDeck extends Component {
  constructor(props){
    super(props)
  }

  static navigationOptions = {
    headerTitle: 'New Deck',
  }

  state = {
    title: ''
  };

  submit = () => {
    const { dispatch } = this.props

    if (!this.validate(this.state.title)) {
      alert('Please, inform a title')
      return
    }

    const key = generateUID()
    const title = this.state.title.trim()

    const deck = { title }

    saveDeck(key, deck).then(
      dispatch(addDeck(key, deck))
    )

    alert('Deck ' + title.trim() + ' created!')

    this.setState({
      title: ''
    })

    this.toDeckDetails(key, title)
  }

  toDeckDetails = (deckId, title) => {
    this.props.navigation.navigate('DeckDetails', {
      deckId,
      title
    })
  }

  validate = (text) => {
    return text.trim() !== ''
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          label='Title'
          value={this.state.title}
          onChangeText={title => this.setState({ title })}
        />
        <Button icon="add" onPress={this.submit}>
          Save
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 20,
  }
})

export default connect()(NewDeck)