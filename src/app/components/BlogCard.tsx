import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogCard from './BlogCard';
import { fetchBlogs } from '../features/blogs/blogsSlice';
import styles from '../styles/Blog.module.css';
import { RootState } from '../store'; // Adjust the path according to your project structure

const BlogList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state: RootState) => state.blogs.blogs);
  const blogStatus = useSelector((state: RootState) => state.blogs.status);

  useEffect(() => {
    if (blogStatus === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [blogStatus, dispatch]);

  return (
    <div className={styles.blogList}>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
