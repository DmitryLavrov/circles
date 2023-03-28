import {Item} from './types'
import mockData from './mockData.json'
import {createSlice} from '@reduxjs/toolkit'
import {RootState} from './createStore'

const initialState: Item[] = mockData as Item[]

const slice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
})

export const getItems = () => (state: RootState) => {
  return state.items
}

export default slice.reducer
