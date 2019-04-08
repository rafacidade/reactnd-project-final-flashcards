import { AsyncStorage } from 'react-native'

export const STORAGE_KEY_CARDS = 'FlashCards:cards'
export const STORAGE_KEY_DECKS = 'FlashCards:decks'

export function getDecks () {
  return AsyncStorage.getItem(STORAGE_KEY_DECKS).then(
    results => JSON.parse(results)
  )
}

export function getCards () {
  return AsyncStorage.getItem(STORAGE_KEY_CARDS).then(
    results => JSON.parse(results)
  )
}

export function saveDeck(key, deck) {
  return AsyncStorage.mergeItem(STORAGE_KEY_DECKS, JSON.stringify({
      [key]: deck
  }))
}

export function saveCard(key, card) {
  return AsyncStorage.mergeItem(STORAGE_KEY_CARDS, JSON.stringify({
      [key]: card
  }))
}

export function clearDecks () {
  return AsyncStorage.clear(STORAGE_KEY_DECKS)
}

export function clearCards () {
  return AsyncStorage.clear(STORAGE_KEY_CARDS)
}