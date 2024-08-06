import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { fetchBlogs } from '../features/blogs/blogsSlice';
import styles from '../styles/SearchBar.module.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = debounce((value) => {
    dispatch(fetchBlogs(value));
  }, 300);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Search blogs"
      value={query}
      onChange={handleChange}
      className={styles.searchBar}
    />
  );
};

export default SearchBar;
