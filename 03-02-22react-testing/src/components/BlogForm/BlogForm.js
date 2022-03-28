import { useState } from 'react';

export const BlogForm = (props) => {
  // const [blog, setBlog] = useState({title});

  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  // const handleInput = (e) => {
  //   setBlog(blog => ({

  //   }))
  // }

  return (
    <form onSubmit={() => props.handleSubmit({title, body})}>
      <input
        type='text'
        name='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        name='body'
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  )
};