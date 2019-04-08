import React from 'react';
import { Divider } from 'react-native-paper'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

class CardListItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { card, decks } = this.props
    const { deckId, question, answer } = card

    const { title } = decks[deckId]

    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('CardDetails', {
            title,
            question,
            answer,
        })} >
          <View style={styles.question}>
            <Text>
            {question}
            </Text>
          </View>
        </TouchableOpacity>
        <Divider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  question: {
    padding: 20,
  },
})

function mapStateToProps({ decks }) {
  return {
    decks,
  }
}

export default withNavigation(connect(mapStateToProps)(CardListItem))