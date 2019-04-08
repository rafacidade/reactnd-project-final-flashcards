import { ADD_DECK, RECEIVE_DECKS, DELETE_DECKS } from '../actions'

export default function decks(state={}, action){
  switch (action.type) {
    case ADD_DECK: {
      return {
        ...state,
        [action.deckId]: action.deck
      }
    }
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case DELETE_DECKS:
      Object.keys(state).map(deck => { delete state[deck] })
      return {
        ...state,
      }
    default:
      return state
  }
}