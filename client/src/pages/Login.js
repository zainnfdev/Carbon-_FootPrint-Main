import React, { useState } from 'react';
import './assets/css/signup_login.css';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="login-main">
      <div className="login">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleFormSubmit}>
          <input
            className="login-input"
            placeholder="Your email"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            className="login-input"
            placeholder="******"
            name="password"
            type="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
          {error && <p>Login failed</p>}
        </form>
        <p>
          Don't have an account?{' '}
          <Link to="/signup" className="login-link">
            Start here
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
