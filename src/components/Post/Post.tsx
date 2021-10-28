import React from 'react';
import { PostProps } from './Post.props';
import styles from './Post.module.scss';

const Post = ({post}: PostProps): JSX.Element => {
  const {title, body, name} = post;

  return (
    <li className={styles.wrapper}>
      <h2 className={styles.title}>
        {title}
      </h2>
      <p className={styles.body}>
        {body}
      </p>
      <p className={styles.author}>
        {name}
      </p>
    </li>
  );
};

export default Post;
