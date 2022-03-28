import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {sampleBlogs} from './../../sampleData.js';

const formatDate = (date) => {
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  date = new Date(date);
  return date.toLocaleString('en-us', options);
};

export const BlogDetail = ({ title, body, created_at }) => (
  <article>
    <h2>{title}</h2>
    <p>{body}</p>
    <time>{created_at}</time>
  </article>
)

export const BlogList = (props) => {
  const [blogs, setBlogs] = useState(props.blogs);
  const [selectedBlog, setSelectedBlog] = useState(props.blogs[0])

  const fetchBlogsData = async () => {
    setBlogs(sampleBlogs)
  }

  useEffect(() => {
    fetchBlogsData();
  }, [])

  return (
    <div>
      {blogs.length === 0 ? (
        <p>No blogs!</p>
      ) : (
        <>
          <ol>
            {blogs.map((blog) => (
              <li key={blog.id}>
                <button type="button" onClick={() => setSelectedBlog(blog)}>{blog.title}</button>
              </li>
            ))}
          </ol>
          <BlogDetail {...selectedBlog} />
        </>
      )}
    </div>
  );
};

BlogList.defaultProps = {
  blogs: [],
};

BlogList.propTypes = {
  blogs: PropTypes.array,
};

//To install package for propTypes do this:
/*
npm install prop-types
*/