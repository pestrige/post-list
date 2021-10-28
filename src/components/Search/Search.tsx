import React, { ChangeEvent, useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './Search.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { searchTextSelector } from '../../store/selectors';
import { setSearchText } from '../../store/dataSlice';
import useDebounce from '../../hooks/useDebounce';

const Search = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const searchText = useAppSelector(searchTextSelector);
  const [inputValue, setInputValue] = useState<string>(searchText);
  const debouncedValue = useDebounce<string>(inputValue, 500);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setInputValue(value);
  };

  useEffect(() => {
    dispatch(setSearchText(debouncedValue));
  }, [debouncedValue, dispatch]);

  return (
    <div className={cn(styles.wrapper, 'container')}>
      <label className={styles.label}>
        <span className={styles.icon} aria-label='Иконка поиска'/>
        <input
          type='text'
          className={styles.input}
          placeholder='Filter by author...'
          onChange={handleChange}
          value={inputValue}
        />
      </label>
    </div>
  );
};

export default Search;
