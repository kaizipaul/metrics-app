import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://rickandmortyapi.com/api/character/';

export const initialState = [];

// TO DO
// 1. remove randomArray function
// 2. add actions to favorite and unfav characters
// 3. add the new actions to homePage.jsx

export const getCharacter = createAsyncThunk('home/getCharacter',
  async () => {
    const randomArray = Array.from({ length: 25 }, () => Math.floor(Math.random() * 800));
    const response = await fetch(`${apiUrl}/${randomArray}`);
    const data = await response.json();
    const characterData = data.map((char) => ({
      id: char.id,
      name: char.name,
      status: char.status,
      species: char.species,
      image: char.image,
      origin: char.origin.name,
      episodes: char.episode,
    }));
    return characterData;
  });

// TODO 1/03/24
// 1. First go cut your hair
// 2. Make this slice work
// 3. export the actions to CharacterCard
// 4. in the function add an if statement to check if the id matches the action

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    // Action 1: Add to collection
    addToCollection: (state, action) => state.map((char) => {
      if (char.id !== action.payload) return char;
      return { ...char, added: true };
    }),

    // Action 2: Remove from collection
    removeFromCollection: (state, action) => state.map((char) => {
      if (char.id !== action.payload) return char;
      return { ...char, added: false };
    }),
  },
  extraReducers: (builder) => {
    // in contrast to the normal redux library, redux toolkit offers a utility function
    // the utility function is called builder.addCase
    // it helps to add an action without having to put up a switch statement
    builder.addCase(getCharacter.pending, () => initialState);
    builder.addCase(getCharacter.fulfilled, (state, action) => action.payload);
  },
});

export const { addToCollection, removeFromCollection } = characterSlice.actions;

export default characterSlice.reducer;
