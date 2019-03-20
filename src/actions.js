// add a card (action creator)
export const addCard = (text, boardIndex) => ({
  type: 'ADD_CARD',
  text,
  boardIndex,
});

// remove a card
export const removeCard = id => ({
  type: 'REMOVE_CARD',
  id,
});

// transfer a card
export const transferCard = (id, destinationBoardIndex) => ({
  type: 'TRANSFER_CARD',
  id,
  destinationBoardIndex,
});

// add a board

// remove a board
