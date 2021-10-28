import { IPost } from '../interfaces/IPost';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../interfaces/IUser';

interface dataState {
  posts: IPost[];
  users: IUser[];
  isLoading: boolean;
  isError: boolean;
  searchText: string;
}

const initialState: dataState = {
  posts: [],
  users: [],
  isLoading: true,
  isError: false,
  searchText: '',
};

const dataSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<boolean>) {
      state.isError = action.payload;
    },
    setPosts(state, action: PayloadAction<IPost[]>) {
      state.posts = action.payload;
    },
    setUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
  },
});

export const {setIsLoading, setError, setPosts, setUsers, setSearchText} = dataSlice.actions;

export default dataSlice.reducer;
