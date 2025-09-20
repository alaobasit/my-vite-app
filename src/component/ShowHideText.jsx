import React, { useState } from 'react';

const ShowHideText = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => setIsVisible(prev => !prev);

  return (
    <div>
      <button onClick={handleToggle}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && (
        <p>Welcome to Imagined Idea React Class!</p>
      )}
    </div>
  );
};

export default ShowHideText;