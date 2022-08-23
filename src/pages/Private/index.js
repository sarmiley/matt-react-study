import React from 'react'
import { Outlet } from 'react-router-dom'


function Private() {

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default Private;
