import { createSlice } from '@reduxjs/toolkit'

const initialState = { count: 0 }


const pokemonStorageSlice = createSlice({
  name: 'pokemonStorage',
  initialState,
  reducers: {
  },
  extraReducers: {
    'pokemon/catchPokemon': (state) => {
      state.count++
      console.log(`Catch pokemon + 1, You have ${state.count} pokemons now`);
    }
  }
})

export default pokemonStorageSlice.reducer