function App() {
  

  return <center class='to-do-container'>
    <h1>To-Do List</h1>
      <div class="container text-center">
  <div class="row">
    <div class="col-4">
      <input type="text" placeholder="To Do Task"/>
    </div>
    <div class="col-4">
      <input type="date"/>
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-outline-primary">Add</button>
    </div>
  </div>

  <div class="container text-center">
   <div class="row">
    <div class="col-4">
      Buy Chocolate
    </div>
    <div class="col-4">
      2/4/2025</div>
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-secondary">Secondary</button>
    </div>
  </div>
</div>
  </center>
}

export default App;
