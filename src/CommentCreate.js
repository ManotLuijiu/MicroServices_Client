import React, { useState } from 'react';
import axios from 'axios';

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('');

  console.log(content, postId);

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent('');
  };

  return (
    <div className="mb-3">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="comment">
            New Comment
          </label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            name="comment"
            id="comment"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary bt-3">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
