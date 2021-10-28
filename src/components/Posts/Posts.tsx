import React from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import { getFilteredPosts } from '../../store/selectors';
import Post from '../Post/Post';
import styles from './Posts.module.scss';

const Posts = (): JSX.Element => {
  const filteredPosts = useAppSelector(getFilteredPosts);

  return (
    <ul className={styles.list}>
      {
        filteredPosts.map((post) => (
          <Post
            key={post.id.toString()}
            post={post}
          />
        ))
      }
    </ul>
  );
};

export default Posts;
