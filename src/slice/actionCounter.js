import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = { count: 0 }

const incrementBy = createAction('incrementBy')
const decrement = createAction('decrement')

function isFulfilledAction(action) {
  return action.type.endsWith('fulfilled')
}

const actionCounterSlice = createSlice({
  name: 'actionCounter',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementBy, (state) => {
        state.count++
        console.log(`action counter ++`);
      })
      .addCase(decrement, (state, action) => {
        state.count--
      })
      .addMatcher(isFulfilledAction, (state) => {
        state.count++
        console.log(`show action count ${state.count}`)
      })

  }
})

export default actionCounterSlice.reducer