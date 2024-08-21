import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:5000/users';

export const registerUser = createAsyncThunk('auth/registerUser', async (user, { rejectWithValue }) => {
  try {
    // Check if email already exists
    const response = await axios.get(apiUrl, { params: { email: user.email } });
    if (response.data.length > 0) {
      throw new Error('Email already exists');
    }

    // Register new user
    const registerResponse = await axios.post(apiUrl, user);
    return registerResponse.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const loginUser = createAsyncThunk('auth/loginUser', async (user, { rejectWithValue }) => {
  try {
    const response = await axios.get(apiUrl, { params: { email: user.email, password: user.password } });
    if (response.data.length === 0) {
      throw new Error('Invalid email or password');
    }
    return response.data[0];
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logoutUser(state){
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});
export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
