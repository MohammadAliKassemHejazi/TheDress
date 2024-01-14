import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/auth/login",
        { email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json", // You can add other headers as needed
          },
        }
      );
      localStorage.setItem('token', response.data.token);
      axios.interceptors.request.use((config) => {
      
        if (response.data.token) {
          config.headers['Authorization'] = `Bearer ${response.data.token}`;
        }
        return config;
      });
      // Redirect to dashboard or other page
    } catch (error) {
      console.error('Login error', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
