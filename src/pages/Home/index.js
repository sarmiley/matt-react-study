import '../../assets/style.css';
import { Link } from 'react-router-dom'
import { catchPokemon } from '../../slice/pokemon'
import { useDispatch } from 'react-redux'
import { useEffect, useCallback } from 'react';
import { useQueryPokemonMutation } from 'services/pokemonService'





function Home() {
  const dispatch = useDispatch()

  const [ queryPokemon ] = useQueryPokemonMutation()



  const initPokemonInfo = useCallback(async (pokemonId) => {
    const res = await queryPokemon(pokemonId).unwrap()
    const pokemonInfo = { name: res.name, gender: 'male', hp: 100, maxHp: 100, exp: 0, lv: 5, img: res.sprites.front_default  }
    dispatch(catchPokemon(pokemonInfo))

  }, [queryPokemon, dispatch])


  useEffect(() => {
    const pokemonId = parseInt(Math.random() * 151)
    initPokemonInfo(pokemonId)
  }, [initPokemonInfo])



  return (
    <div className="App">
      <Link className="welcome-link" to="/private/welcome" > Welcome </Link>
    </div>
  );
}

export default Home;
