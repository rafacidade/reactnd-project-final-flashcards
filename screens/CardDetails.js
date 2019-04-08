import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Divider, Button, Headline, Title, Subheading } from 'react-native-paper'

export class CardDetails extends React.Component {
  static navigationOptions = {
    headerTitle: 'Card Details',
  }

  goBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    const title = this.props.navigation.getParam('title', '')
    const question = this.props.navigation.getParam('question', '[Question not found]')
    const answer = this.props.navigation.getParam('answer', '[Answer not found]')

    return (
      <View style={styles.container}>
        <ScrollView>
          <Headline style={styles.header}>
            {title}
          </Headline>
          <Divider style={styles.divider}/>
          <Title>
            Question:
          </Title>
          <Subheading>
            {question}
          </Subheading>
          <Title>
            Answer:
          </Title>
          <Subheading>
            {answer}
          </Subheading>
          <Divider style={styles.divider}/>
          <Button onPress={this.goBack}>
            Return to Deck Details
          </Button>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 40,
  },
  divider: {
    marginBottom: 20,
    marginTop: 20,
  },
  header: {
    alignSelf: 'center',
    fontWeight: 'bold',
  }
});

export default CardDetails