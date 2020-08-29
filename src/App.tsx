import React from 'react';
import AppReducer from './reducer'
import { StoreProvider } from "./useStore";


import DesktopIcons from './Components/DesktopIcons';
import TaskBar from './Components/TaskBar';
import Desktop from './Components/Desktop';
import { Container } from './Components/Layout';

const storeKey = "APP_STORE"


let initialState = {};

// Localstorage
try {
  const store = localStorage.getItem(storeKey);
  initialState = store ? JSON.parse(store) : initialState
} catch { }

const reducer = (state: any, action: any) => {
  const newState = AppReducer(state, action)
  localStorage.setItem(storeKey, JSON.stringify(newState))
  return newState
}
// END Localstorage


function App() {
  return (
    <StoreProvider reducer={reducer} initialState={initialState}>
      <Container>
        <Desktop>
          <DesktopIcons />
        </Desktop>
        <TaskBar />
      </Container>
    </StoreProvider>
  );
}

export default App;
