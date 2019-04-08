import React from 'react'
import { Title } from 'react-native-paper'
import { StyleSheet, View, Text, Animated } from 'react-native'
import { connect } from 'react-redux'

class CardQuiz extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 1500,
      }
    ).start()
  }

  render() {
    const { title, text } = this.props
    let { fadeAnim } = this.state

    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.card, {
          opacity: fadeAnim,
          }]}
        >
        <View styles={styles.card}>
          <View>
          <Title>{title}</Title>
          </View>
          <View styles={styles.text}>
          <Text>{text}</Text>
          </View>
        </View>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 20,
    padding: 20,
  },
})

export default connect()(CardQuiz)