export const ADD_CARD = 'ADD_CARD'
export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const RECEIVE_CARDS = 'RECEIVE_CARDS'
export const DELETE_DECKS = 'DELETE_DECKS'
export const DELETE_CARDS = 'DELETE_CARDS'

export function addCard(cardId, card) {
  return {
    type: ADD_CARD,
    cardId,
    card
  }
}

export function addDeck(deckId, deck) {
  return {
    type: ADD_DECK,
    deckId,
    deck
  }
}

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function receiveCards(cards) {
  return {
      type: RECEIVE_CARDS,
      cards,
  }
}

export function deleteDecks() {
  return {
    type: DELETE_DECKS,
  }
}

export function deleteCards() {
  return {
    type: DELETE_CARDS,
  }
}