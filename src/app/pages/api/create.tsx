import React from 'react';
import CreateBlogForm from '../../components/CreateBlogForm';
import Navbar from '../../components/Navbar';
import styles from '../styles/CreateBlog.module.css';

const CreateBlogPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <CreateBlogForm />
    </div>
  );
};

export default CreateBlogPage;
