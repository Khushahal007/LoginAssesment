import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setLoading(true);
  //   setError('');

  //   try {
  //     const response = await axios.post('http://localhost:8080/api/login', { email, password });
  //     setLoading(false);

  //     if (response.status === 200 && response.data.success) {
  //       // If login is successful, redirect to home page
  //       localStorage.setItem('email', email);
  //       localStorage.setItem('password', password);
  //       navigate('/home', { state: { email } });
  //     } else {
  //       // If login fails, display error message
  //       setError(response.data.message || 'Incorrect email or password.');
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     setError('Invalid Email or Password');
  //   }
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:8080/api/login', { email, password });
      setLoading(false);

      if (response.status === 200 && response.data.success) {
        // If login is successful, redirect to home page
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        navigate('/home', { state: { email } });
      } else {
        if (response.status === 401 && response.data.message.includes('blocked')) {
          setError(response.data.message);
        } else {
          setError(response.data.message || 'Incorrect email or password.');
        }
      }
    } catch (error) {
      setLoading(false);
      setError('Invalid Email or Password');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
