import { useNavigate } from 'react-router-dom'
import { catchPokemon } from 'slice/pokemon'
import { useDispatch } from 'react-redux'
import { useCallback, useEffect } from 'react';
import { useQueryPokemonMutation } from 'services/pokemonService'
import { useSelector } from 'react-redux'
import PokemonRegister from './components/PokemonRegister';


function ShowPokemon() {
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const [ queryPokemon ] = useQueryPokemonMutation()

  const pokemon = useSelector( state => state.pokemon );
  const {name, gender, hp, maxHp, exp, lv,img } = pokemon


  const initPokemonInfo = useCallback(async (pokemonId) => {
    const res = await queryPokemon(pokemonId).unwrap()
    const pokemonInfo = { name: res.name, gender: 'male', hp: 100, maxHp: 100, exp: 0, lv: 5, img: res.sprites.front_default  }
    dispatch(catchPokemon(pokemonInfo))

  }, [queryPokemon, dispatch])

  useEffect(() => {
    const pokemonId = parseInt(Math.random() * 907)
    initPokemonInfo(pokemonId)
  }, [initPokemonInfo])

  function back (e) {
    return navigate('/home', {replace: true});
  }

  function catchOtherPokemon () {
    const pokemonId = parseInt(Math.random() * 907)
    initPokemonInfo(pokemonId)
  }

  return (
    <>
      <div>
        <img src={ img } alt='' />
        <p>{ name }</p>
        <p> { gender }</p>
        <p>HP: { hp } / { maxHp }</p>
        <p> Lv { lv } Exp: { exp }</p>
        <button onClick={catchOtherPokemon}>換一隻</button><button onClick={back}>返回</button>
      </div>
      <div style={{marginTop: '50px'}}>
        <PokemonRegister />
      </div>
    </>
  );
}

export default ShowPokemon;
