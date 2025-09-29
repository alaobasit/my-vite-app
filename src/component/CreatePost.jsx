import React, { useState } from 'react';

const CreatePost = () => {
  // Form fields
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');

  // Form status
  const [isPostCreated, setIsPostCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Validation tracking
  const [isTitleTouched, setIsTitleTouched] = useState(false);
  const [isContentTouched, setIsContentTouched] = useState(false);

  // Validation rules
  const isTitleValid = postTitle.length >= 2 && postTitle.length <= 20;
  const isContentValid = postContent.length >= 10 && postContent.length <= 200;
  const isFormValid = isTitleValid && isContentValid;

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ title: postTitle, body: postContent }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });

      if (res.ok) {
        setIsPostCreated(true);
        setPostTitle('');
        setPostContent('');
        setIsTitleTouched(false);
        setIsContentTouched(false);
        setErrorMessage('');

        setTimeout(() => setIsPostCreated(false), 2000);
      } else {
        setErrorMessage('Failed to create post. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again later.');
    }
  };

  return (
    <form onSubmit={handlePostSubmit} className="p-3 border rounded" style={{ maxWidth: 500, margin: 'auto' }}>
      <h3>Create Post</h3>

      {/* Title */}
      <div className="mb-3">
        <label htmlFor="postTitle">Title</label>
        <input
          id="postTitle"
          type="text"
          className={`form-control ${isTitleTouched && !isTitleValid ? 'is-invalid' : ''}`}
          value={postTitle}
          onChange={e => setPostTitle(e.target.value)}
          onBlur={() => setIsTitleTouched(true)}
        />
        {isTitleTouched && postTitle.length === 0 && <div className="text-danger">Title is required.</div>}
        {isTitleTouched && postTitle.length > 0 && postTitle.length < 2 && <div className="text-danger">Minimum 2 characters.</div>}
        {isTitleTouched && postTitle.length > 20 && <div className="text-danger">Maximum 20 characters.</div>}
      </div>

      {/* Body */}
      <div className="mb-3">
        <label htmlFor="postContent">Content</label>
        <textarea
          id="postContent"
          className={`form-control ${isContentTouched && !isContentValid ? 'is-invalid' : ''}`}
          value={postContent}
          onChange={e => setPostContent(e.target.value)}
          onBlur={() => setIsContentTouched(true)}
        />
        {isContentTouched && postContent.length === 0 && <div className="text-danger">Content is required.</div>}
        {isContentTouched && postContent.length > 0 && postContent.length < 10 && <div className="text-danger">Minimum 10 characters.</div>}
        {isContentTouched && postContent.length > 200 && <div className="text-danger">Maximum 200 characters.</div>}
      </div>

      {/* Submit */}
      <button type="submit" className="btn btn-primary" disabled={!isFormValid}>
        Create
      </button>

      {/* Feedback */}
      {isPostCreated && <div className="text-success mt-3">Post Created Successfully!</div>}
      {errorMessage && <div className="text-danger mt-3">{errorMessage}</div>}
    </form>
  );
};

export default CreatePost;

