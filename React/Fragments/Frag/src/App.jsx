import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Cars from './Components/CarMap.jsx';
import Error from './Components/ErrorMsg.jsx'


function App() {
  let Car = ['BMW','Audi','Toyota','Nissan'];

  return (<>
    <h1>Favourite Car</h1>
     <Error></Error>
     <Cars></Cars>
  </>
  );
  
}

export default App
