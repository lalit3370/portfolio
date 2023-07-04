import React from 'react';
import { Outlet } from 'react-router-dom';
import './MainLayout.scss';

function MainLayout() {
  return (
    <>
      {/* <div className="Landing__image_wrapper">this is image</div> */}
      <Outlet />
    </>
  );
}

export default MainLayout;
