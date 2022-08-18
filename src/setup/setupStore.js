import { configureStore } from '@reduxjs/toolkit'

import PokemonReducer from '../slice/pokemon'

export default configureStore({
  reducer: {
    pokemon: PokemonReducer
  },
});