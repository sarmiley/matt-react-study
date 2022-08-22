import { useNavigate } from 'react-router-dom'
import { catchPokemon } from 'slice/pokemon'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react';
import { useQueryPokemonMutation } from 'services/pokemonService'

function Welcome() {
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const [ queryPokemon ] = useQueryPokemonMutation()



  const initPokemonInfo = useCallback(async (pokemonId) => {
    const res = await queryPokemon(pokemonId).unwrap()
    const pokemonInfo = { name: res.name, gender: 'male', hp: 100, maxHp: 100, exp: 0, lv: 5, img: res.sprites.front_default  }
    dispatch(catchPokemon(pokemonInfo))

  }, [queryPokemon, dispatch])

  function back (e) {
    return navigate('/home', {replace: true});
  }

  function catchOtherPokemon () {
    const pokemonId = parseInt(Math.random() * 907)
    initPokemonInfo(pokemonId)
  }

  return (
    <>
      <button onClick={catchOtherPokemon}>換一隻</button><button onClick={back}>返回</button>
    </>
  );
}

export default Welcome;
