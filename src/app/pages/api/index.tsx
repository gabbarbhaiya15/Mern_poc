import React from 'react';
import BlogList from '../../components/BlogList';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import styles from '../styles/Blog.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <SearchBar />
      <BlogList />
    </div>
  );
};

export default HomePage;
