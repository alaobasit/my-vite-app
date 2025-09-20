import React, { useState } from 'react';

const passwordRegex = /^(?=.*[A-Z])(?=(?:.*\d){2,})(?=(?:.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]){1,})(?!.*\s).{8,}$/;

const PasswordValidator = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleChange = (e) => {
    setPassword(e.target.value);
    setIsValid(null);
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRegex.test(password)) {
      setIsValid(true);
      setMessage('✅ Strong password!');
    } else {
      setIsValid(false);
      setMessage(
        '❌ Password must have at least 1 uppercase, 1 special character, 2 numbers, 8 characters total, and no spaces.'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handleChange}
          className="form-control my-2"
        />
      </label>
      <button type="submit" className="btn btn-primary mb-2">
        Check Password
      </button>
      {isValid !== null && (
        <div style={{ color: isValid ? 'green' : 'red' }}>
          {message}
        </div>
      )}
    </form>
  );
};

export default PasswordValidator;