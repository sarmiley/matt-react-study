import '../../assets/style.css';
import { Link } from 'react-router-dom'
import { catchPokemon } from '../../slice/pokemon'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';



function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(catchPokemon({ name: '凱西', gender: 'male', hp: 100, maxHp: 100, exp: 0, lv: 5  }))
  })


  return (
    <div className="App">
      <Link className="welcome-link" to="/private/welcome" > Welcome </Link>
    </div>
  );
}

export default Home;
