import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between rounded-lg bg-gray-200 animate-fadeIn'>
      <div className='w-full'>
        <Header className="animate-slideDown" />
        <main className="flex-grow p-4 animate-fadeIn">
          <Outlet />
        </main>
        <Footer className="animate-slideUp" />
      </div>
    </div>
  ) : null;
}

export default App;
