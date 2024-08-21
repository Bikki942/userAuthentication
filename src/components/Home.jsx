import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/authSlice';

function Home() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser(user.id));
    navigate('/'); 
  };

  return (
    <div className='mt-8'>
      <h1 className='bg-red-300 mt-5 p-2 text-2xl font-bold'>Home Page</h1>
      {user ? (
        <div className='mt-8 bg-yellow-200 p-4'>
          <p>Welcome, {user.name}!</p>
          <button
            onClick={handleLogout}
            className='mt-2 p-2 bg-red-500 text-white rounded'
          >
            Log Out
          </button>
        </div>
      ) : (
        <p className='mt-4'>Please log in to see personalized content.</p>
      )}
    </div>
  );
}

export default Home;
