import { RootState } from './store';
import { createSelector } from 'reselect';
import { IFullPost, IPost } from '../interfaces/IPost';
import { IUser } from '../interfaces/IUser';

export const postsSelector = ({data}: RootState) => data.posts;
export const usersSelector = ({data}: RootState) => data.users;
export const isLoadingSelector = ({data}: RootState) => data.isLoading;
export const isErrorSelector = ({data}: RootState) => data.isError;
export const searchTextSelector = ({data}: RootState) => data.searchText;

export const getPostsWithUsers = createSelector(
  [postsSelector, usersSelector],
  (posts: IPost[], users: IUser[]) => posts.map((post) => ({
    ...post,
    name: users.find(({id}) => id === post.userId)?.name || '',
  } as IFullPost)));

export const getFilteredPosts = createSelector(
  [getPostsWithUsers, searchTextSelector],
  (posts, text) => posts.filter(({name}) => {
    return name.toLowerCase().includes(text.toLowerCase());
  }),
);
