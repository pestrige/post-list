import React, { useEffect } from 'react';
import styles from './Content.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { isErrorSelector, isLoadingSelector} from '../../store/selectors';
import { fetchData } from '../../store/actions';
import Loader from '../Loader/Loader';
import Posts from '../Posts/Posts';
import Search from '../Search/Search';

const Content = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isLoadingSelector);
  const isError = useAppSelector(isErrorSelector);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <main className={styles.main}>
      <h1 className='visually-hidden'>Posts</h1>
      <section className='container'>
        <Search />
        {isLoading && !isError
          ? <Loader />
          : <Posts />
        }
        {isError && <p className={styles.error}>Page load error, come back later...</p>}
      </section>
    </main>
  );
};

export default Content;
