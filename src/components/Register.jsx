import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/authSlice';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const handleRegister = () => {
    dispatch(registerUser({ name, email, password })).then((action) => {
      if (action.error) {
        alert('Email already exists');
      } else {
        alert('Registration successful');
      }
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button
        onClick={handleRegister}
        disabled={status === 'loading'}
        className={`w-full p-2 text-white rounded ${status === 'loading' ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
      >
        Register
      </button>
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
};

export default RegisterPage;
