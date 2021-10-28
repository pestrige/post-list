import { AppDispatch } from './store';
import axios from 'axios';
import { IPost } from '../interfaces/IPost';
import { IUser } from '../interfaces/IUser';
import {setIsLoading, setPosts, setError, setUsers} from './dataSlice';

export const fetchData = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIsLoading(true));
    const [postsResponse, usersResponse] = await Promise.all([
      axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts'),
      axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users'),
    ]);
    dispatch(setIsLoading(false));
    dispatch(setError(false));
    dispatch(setPosts(postsResponse.data));
    dispatch(setUsers(usersResponse.data));
  } catch (error) {
    dispatch(setIsLoading(false));
    dispatch(setError(true));
  }
};

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(setIsUsersLoading(true));
//     const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//     dispatch(setUsers(response.data));
//   } catch (error) {
//     dispatch(setIsUsersError());
//   }
// };
