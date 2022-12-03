import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://rickandmortyapi.com/api/character/';

export const initialState = true;

export const getDetails = createAsyncThunk('details/getDetails', async (id) => {
  const response = await fetch(`${apiUrl}/${id}`);
  const data = await response.json();
  return data;
});

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, () => initialState);
    builder.addCase(getDetails.fulfilled, (state, action) => action.payload);
  },
});

export default detailsSlice.reducer;
