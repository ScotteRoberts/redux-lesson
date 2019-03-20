import short from 'shortid';
import { stat } from 'fs';

/* eslint-disable no-case-declarations */
// Reducers: Pure function that takes in current state and action and returns updated state

function reducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        boards: state.boards,
        cards: [
          ...state.cards,
          { id: short.generate(), text: action.text, board: action.boardIndex },
        ],
      };

    case 'REMOVE_CARD':
      return {
        boards: state.boards,
        cards: state.cards.filter(card => card.id !== action.id),
      };
    case 'TRANSFER_CARD':
      const index = state.cards.findIndex(card => card.id === action.id);

      const updatedBoard = state.cards.map(card => {
        if (card.id === action.id) {
          return {
            ...state.cards[index],
            board: action.destinationBoardIndex,
          };
        }
        return card;
      });

      return {
        boards: state.boards,

        cards: [
          ...state.cards.slice(0, index),
          {
            ...state.cards[index],
            board: action.destinationBoardIndex,
          },
          ...state.cards.slice(index + 1),
        ],
      };
    default:
      return state;
  }
}
