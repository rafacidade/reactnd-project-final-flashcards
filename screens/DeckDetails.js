import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Button, Headline, Divider } from 'react-native-paper'
import { connect } from 'react-redux'
import CardList from '../components/CardList'

class DeckDetails extends React.Component{
  constructor(props){
    super(props)
  }

  static navigationOptions = {
    headerTitle: 'Deck Details',
  }

  render(){
    const title = this.props.navigation.getParam('title', 'Deck Details')
    const deckId = this.props.navigation.getParam('deckId', '')

    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <Headline style={styles.header}>{title}</Headline>
          </View>
          <CardList deckId={deckId} />
        </ScrollView>
        <Divider />
        <Button
          icon='add'
          onPress={() => this.props.navigation.navigate('NewCard', {
            deckId,
            title
            })} >
          Add New Card
        </Button>
        <Divider />
        <Button
          icon='check'
          onPress={() => this.props.navigation.navigate('Quiz', {
            deckId,
            title
            })} >
          Start Quiz
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
  },
  header: {
    alignSelf: 'center',
    fontWeight: 'bold',
  }
})

export default connect()(DeckDetails)