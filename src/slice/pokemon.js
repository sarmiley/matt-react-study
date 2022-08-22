import { createSlice } from '@reduxjs/toolkit'

const initialState = { name: '', gender: '', hp: 0, maxHp: 0, exp: 0, lv: 0,img: '', isEmpty: true  }


const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    catchPokemon(state, action) {
      const payload = action.payload

      state.name = payload.name;
      state.gender = payload.gender;
      state.hp = payload.hp;
      state.maxHp = payload.maxHp;
      state.exp = payload.exp;
      state.lv = payload.lv;
      state.img = payload.img
      state.isEmpty = false;
    },
    update(state, action) {
      const payload = action.payload

      state.hp = payload.hp;
      state.maxHp = payload.maxHp;
      state.exp = payload.exp;
    },
    lvUp(state) {
      state.lv++;
    },
    clear(state) {
      state = { name: '', gender: '', hp: 0, maxHp: 0, exp: 0, lv: 0,img: '', isEmpty: true  }
    }
  },
})


export const { catchPokemon, update, lvUp, clear } = pokemonSlice.actions
export default pokemonSlice.reducer