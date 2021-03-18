import React, { useState, createContext } from 'react'
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext =  React.createContext()


function App() {
  const [theme, setTheme] = useState('red')
  return (
    <createContext.Provider value = {{backgroundColor: theme}}>
    <p>Welcome to Recipe App</p>
    Counter
    <Counter initialCount={5}/>
    Hook Counter
    <CounterHooks initialCount={3}/>
    <button onClick={()=>setTheme(prevTheme =>{
      return prevTheme === 'red'? 'Blue':'red'
    })}>Toggle Theme</button>
    </createContext.Provider>
    
  );
}

export default App;
