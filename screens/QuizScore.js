import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Headline, Divider } from 'react-native-paper'
import { connect } from 'react-redux'

class QuizScore extends React.Component{
  constructor(props){
    super(props)
  }

  static navigationOptions = {
    headerTitle: 'Score',
  }

  render(){
    const title = this.props.navigation.getParam('title', 'Quiz Score')
    const deckId = this.props.navigation.getParam('deckId', '')
    const totalCards = this.props.navigation.getParam('totalCards', '0')
    const totalCorrect = this.props.navigation.getParam('totalCorrect', '0')

      return(
        <View style={styles.container}>
          <Headline style={styles.header}>{title}</Headline>
          <Divider style={styles.divider} />
          <Text>Total Cards: {totalCards}</Text>
          <Text>Total Correct Questions: {totalCorrect}</Text>
          <Headline>{Math.round((totalCorrect / totalCards) * 100)}%</Headline>
          <Divider style={styles.divider} />
          <View style={styles.inline}>
            <Button
              onPress={() => this.props.navigation.navigate('Quiz', {
                deckId,
                title
              })}
            >
              Restart Quiz
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('DeckDetails', {
                deckId,
                title
                })}
            >
              Back to Deck
            </Button>
          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      alignSelf: 'center',
      fontWeight: 'bold',
    },
    divider: {
      marginTop: 20,
      marginBottom: 20,
    }
  })

export default connect()(QuizScore)