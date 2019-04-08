import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

import { generateUID } from '../utils/helpers'
import { addCard } from '../actions'
import { saveCard } from '../utils/api'

export class NewCard extends React.Component {
  constructor(props){
    super(props)
  }

  static navigationOptions = {
    headerTitle: 'New Card',
  }

  state = {
    question: '',
    answer: '',
  };

  submit = () => {
    const { dispatch } = this.props
    const deckId = this.props.navigation.getParam('deckId', '')

    const question = this.state.question.trim()
    const answer = this.state.answer.trim()

    if (!this.validate(question)) {
      alert('Please, inform a question!')
      return
    }

    if (!this.validate(answer)) {
      alert('Please, inform an answer!')
      return
    }

    const key = generateUID()

    const card = {
      deckId,
      question,
      answer,
    }

    saveCard(key, card).then(
        dispatch(addCard(key, card))
    )

    alert('Card created!')

    this.setState({
      question: '',
      answer: '',
    })

    this.goBack()
  }

  goBack = () => {
    this.props.navigation.goBack()
  }

  validate = (text) => {
    return text.trim() !== ''
  }

  render() {

    return (
      <View style={styles.container}>
        <TextInput
          label='Question'
          value={this.state.question}
          onChangeText={question => this.setState({ question })}
          style={styles.input}
        />
        <TextInput
          label='Answer'
          value={this.state.answer}
          onChangeText={answer => this.setState({ answer })}
          style={styles.input}
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
    padding: 10,
  },
  input: {
    margin: 10,
  }
});

export default connect()(NewCard)