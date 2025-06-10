import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Cars from './Components/CarMap';
function App() {
  

  return (<>
    <h1>Favourite Car</h1>
     <ul class="list-group">
  <li class="list-group-item">BMW</li>
  <li class="list-group-item">Koenigsegg</li>
  <li class="list-group-item">Volkswagon</li>
  <li class="list-group-item">Audi</li>
  <li class="list-group-item">Ferrari</li>
   </ul>

   <Cars></Cars>
  </>
  );
  
}

export default App
