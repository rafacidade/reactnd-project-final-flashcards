import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

/* Screens */
import Home from './screens/Home'
import DeckDetails from './screens/DeckDetails'
import CardDetails from './screens/CardDetails'
import NewDeck from './screens/NewDeck'
import NewCard from './screens/NewCard'
import Quiz from './screens/Quiz'
import QuizScore from './screens/QuizScore'

import { setLocalNotification } from './utils/helpers'

const store = createStore(reducer)

const RootStack = createStackNavigator({
    Home,
    DeckDetails,
    CardDetails,
    NewDeck,
    NewCard,
    Quiz,
    QuizScore,
  },
  {
    initialRouteName: 'Home',
  }
)

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
