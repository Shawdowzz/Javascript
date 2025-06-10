function Todo2(){
  let TodoItems = "Buy Ice Cream";
  let TodoDate = "1/02/25";
  return (
   <div class="container">
  <div class="row appRow">
    <div class="col-4">
      {
      TodoItems
      }
    </div>
    <div class="col-4">
      {TodoDate}
    </div>
    <div class="col-2">
      <button type="button" className="btn btn-secondary btn-sze"> Delete </button>
    </div>
  </div>
  </div>
  );

}

export default Todo2;