import React from 'react';

const storeContext = React.createContext()
const dispatchContext = React.createContext()

export const StoreProvider = ({ children, reducer, initialState = {} }) => {
  const [store, dispatch] = React.useReducer(reducer, initialState)

  return (
    <dispatchContext.Provider value={dispatch}>
      <storeContext.Provider value={store}>
        {children}
      </storeContext.Provider>
    </dispatchContext.Provider>
  )
}

export function useStore() {
  return React.useContext(storeContext)
}

export function useDispatch() {
  return React.useContext(dispatchContext)
}