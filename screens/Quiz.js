import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Headline, Divider, IconButton, Card as CardPaper } from 'react-native-paper'
import { connect } from 'react-redux'
import CardQuiz from '../components/CardQuiz'

class Quiz extends React.Component{
  constructor(props){
    super(props)
  }

  state = {
    deckId: '',
    title: '',
    totalCards: 0,
    totalCorrect: 0,
    currentCard: 1,
    deckCards: [],
    showQuestion: true,
  }

  static navigationOptions = {
    headerTitle: 'Quiz',
  }

  toggleCard = () => {
    this.setState({
      showQuestion: !this.state.showQuestion
    })
  }

  answerQuestion = (answerCorrect) => {

    const totalCorrect = answerCorrect ? this.state.totalCorrect + 1 : this.state.totalCorrect

    const { deckId, title, totalCards, currentCard } = this.state

    if(currentCard === totalCards) {
      //clear state (ready for quiz restart)
      this.setState({
        totalCorrect: 0,
        currentCard: 1,
        showQuestion: true,
      })

      //It is done, shows Quiz Score page
      this.props.navigation.navigate('QuizScore', {
        deckId,
        title,
        totalCards,
        totalCorrect,
      })
    } else {
      //set new state to show next question
      this.setState({
        totalCorrect,
        currentCard: currentCard + 1,
        showQuestion: true,
      })
    }
  }

  componentDidMount = () => {
    const deckId = this.props.navigation.getParam('deckId', '')
    const title = this.props.navigation.getParam('title', 'Quiz')
    const { cards } = this.props

    const deckCards = Object.keys(cards).filter(card => cards[card].deckId === deckId)

    this.setState({
      deckId,
      title,
      totalCards: deckCards.length,
      deckCards: Object.keys(cards).filter(card => cards[card].deckId === deckId),
    })
  }

  render(){
    const {
      deckId,
      title,
      totalCards,
      currentCard,
      deckCards,
      showQuestion
    } = this.state

    if(totalCards === 0){
      return (
        <View style={styles.noCards}>
          <Text>Please, add cards to the deck to start Quiz!</Text>
        </View>
      )
    }

    const { cards } = this.props
    const card = deckCards[currentCard-1]

    const { question, answer } = cards[card]

    const cardTitle = showQuestion === true ? 'Question' : 'Answer'
    const cardText = showQuestion === true ? question : answer
    const toggleCardCaption = showQuestion === true ? 'Show Answer' : 'Show Question'

    return(
      <View style={styles.container}>
        <Headline style={styles.header}>
          {title}
        </Headline>
        <Divider />
        <View style={styles.current}>
          <Text>{currentCard}/{totalCards}</Text>
        </View>
        <CardPaper style={styles.card} >
          <CardQuiz title={cardTitle} text={cardText} />
          <Button onPress={this.toggleCard}>
          {toggleCardCaption}
          </Button>
          <Divider />
          <View style={styles.buttonBar}>
            <View>
              <IconButton
                icon='clear'
                color={'#f40202'}
                size={30}
                onPress={() => this.answerQuestion(false)}
                animated={true}
                accessibilityLabel={'Incorrect'}
                style={styles.iconButton}
              />
            </View>
            <View>
              <IconButton
                icon='done'
                color={'#2fa024'}
                size={30}
                onPress={() => this.answerQuestion(true)}
                animated={true}
                accessibilityLabel={'Correct'}
                style={styles.iconButton}
              />
            </View>
          </View>
        </CardPaper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        padding: 20,
    },
    current: {
      alignSelf: 'center',
      margin: 10,
    },
    card: {
        flex: 1,
        marginBottom: 40,
    },
    buttonBar: {
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      margin: 20,
    },
    iconButton: {
      alignSelf: 'center',
    },
    header: {
      alignSelf: 'center',
      fontWeight: 'bold',
    },
    noCards: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ecf0f1',
    }
})

function mapStateToProps({ cards }) {
  return {
    cards
  }
}

export default connect(mapStateToProps)(Quiz)