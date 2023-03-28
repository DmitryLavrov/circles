import {Action, createSlice, Dispatch} from '@reduxjs/toolkit'
import {RootState} from './createStore'
import {FilterPayload, Settings} from './types'

const initialState: Settings = {
  circle: true,
  square: true,
  red: true,
  green: true,
  blue: true,
  yellow: true,
  dark: true,
  light: true,
  columns: 4
}

const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updatedFilter(state, action) {
      state[(action.payload as FilterPayload).parameter] = action.payload.value
    },
    updatedColumns(state, action) {
      state.columns = action.payload
    }
  },
})

const {updatedFilter, updatedColumns} = slice.actions

export const updateFilter = (payload: FilterPayload) => (dispatch: Dispatch<Action>) => {
  dispatch(updatedFilter(payload))
}

export const updateColumns = (payload: number) => (dispatch: Dispatch<Action>) => {
  dispatch(updatedColumns(payload))
}

export const getSettings = () => (state: RootState) => {
  return state.settings
}

export default slice.reducer
