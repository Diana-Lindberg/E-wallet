import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
  activeCard: null,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards.push(action.payload);
    }, 
    setActiveCard: (state, action) => {
      state.activeCard = action.payload;
    }, 
  },
});

export const { addCard, removeCard, setActiveCard } = cardsSlice.actions;
export const selectCard = state => state.cards.cards;
export const selectActiveCard = state => state.cards.activeCard;
export default cardsSlice.reducer;