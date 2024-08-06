import React from 'react';
import Navbar from '../../components/Navbar';
import BlogList from '../../components/BlogList';
import styles from '../styles/Blog.module.css';

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <BlogList />
    </div>
  );
};

export default BlogPage;
