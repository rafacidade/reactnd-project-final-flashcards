import { ADD_CARD, RECEIVE_CARDS, DELETE_CARDS } from '../actions'

export default function cards(state={}, action){
  switch (action.type) {
    case ADD_CARD: {
      return {
        ...state,
        [action.cardId]: action.card
      }
    }
    case RECEIVE_CARDS:
      return {
        ...state,
        ...action.cards
      }
    case DELETE_CARDS:
      Object.keys(state).map(card => { delete state[card] })
      return {
        ...state,
      }
    default:
      return state
  }
}