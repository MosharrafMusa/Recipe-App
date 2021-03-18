import Counter from './Counter'
import CounterHooks from './CounterHooks'


function App() {
  return (
    <>
    <p>Welcome to Recipe App</p>
    Counter
    <Counter initialCount={5}/>
    Hook Counter
    <CounterHooks initialCount={3}/>
    </>
  );
}

export default App;
