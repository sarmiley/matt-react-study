import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Private() {
  const navigate = useNavigate();
  const pokemon = useSelector( state => state.pokemon );
  const {name, gender, hp, maxHp, exp, lv, isEmpty} = pokemon

  useEffect(() => {
    if ( isEmpty ) {
      navigate('/home', {replace: true});
    }
  })


  return (
    <div className="App">
      <p>{ name } { gender } Lv { lv }</p>
      <p>{ hp } / { maxHp }</p>
      <p>Exp: { exp }</p>
      <Outlet />
    </div>
  );
}

export default Private;
