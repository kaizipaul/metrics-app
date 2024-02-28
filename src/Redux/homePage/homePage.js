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

export const characterSlice = createSlice({
  name: 'city',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacter.pending, () => initialState);
    builder.addCase(getCharacter.fulfilled, (state, action) => action.payload);
  },
});

export default characterSlice.reducer;
