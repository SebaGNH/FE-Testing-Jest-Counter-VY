import React from 'react';
import Header from './components/Header';
import CounterApp from './components/CounterApp';



const App = () => {
  return (
    <>
      <div>App</div>
  {/*     <Header 
        titulo={'Hola'}
      /> */}
    <CounterApp
      value={5}
    />
    </>
  )
}

export default App