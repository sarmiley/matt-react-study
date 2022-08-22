import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Private() {
  const navigate = useNavigate();
  const pokemon = useSelector( state => state.pokemon );
  const {name, gender, hp, maxHp, exp, lv,img, isEmpty} = pokemon

  useEffect(() => {
    if ( isEmpty ) {
      navigate('/home', {replace: true});
    }
  })


  return (
    <div className="App">
      <img src={ img } alt='' />
      <p>{ name }</p>
      <p> { gender }</p>
      <p>HP: { hp } / { maxHp }</p>
      <p> Lv { lv } Exp: { exp }</p>
      <Outlet />
    </div>
  );
}

export default Private;
