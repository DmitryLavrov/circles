import {combineReducers, configureStore} from '@reduxjs/toolkit'
import items from './itemsSlice'
import settings from './settingsSlice'

const rootReducer = combineReducers({
  items,
  settings,
})

function createStore() {
  return configureStore({
    reducer: rootReducer
  })
}

export const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
