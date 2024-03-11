import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://rickandmortyapi.com/api/character/';

export const getDetails = createAsyncThunk('details/getDetails', async (id, thunkAPI) => {
  try {
    const response = await fetch(`${apiUrl}/${id}`);
    const data = await response.json();
    if (data.id) {
      const details = {
        id: data.id,
        name: data.name,
        image: data.image,
        location_name: data.location.name,
        location_url: data.location.url,
      };
      return details;
    }
    return {};
  } catch (error) {
    throw thunkAPI.rejectWithValue(error.response.data);
  }
});

const initialState = {
  content: null,
  status: 'idle',
  error: null,
};

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetails.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getDetails.fulfilled, (state, action) => ({
        ...state,
        content: action.payload,
        status: 'succeeded',
      }))
      .addCase(getDetails.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export default detailsSlice.reducer;
