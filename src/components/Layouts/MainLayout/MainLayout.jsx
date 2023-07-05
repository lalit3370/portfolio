import React from 'react';
import { Outlet } from 'react-router-dom';
import './MainLayout.scss';

function MainLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default MainLayout;
