import React, { createContext, useReducer } from 'react'

// create initialState and reducer method to generate State and Dispatch method.
const initialState = {
  popular: [],
  selected: {},
}

// reducer mean take two values return one value.
// take state and action.
// switch by action.type
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POPULAR':
      return { ...state, popular: action.payload.popular }
    case 'SET_SELECTED':
      return { ...state, selected: action.payload.selected }
    default:
      return state
  }
}

// name stores then set initial values state and dispatch method
export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null,
})

const StoreProvider = ({ children }) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState)
  return <Store.Provider value={{globalState, setGlobalState}}>{children}</Store.Provider>
}

export default StoreProvider
