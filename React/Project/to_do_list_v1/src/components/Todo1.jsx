function Todo1(){

  let TodoItems = "Buy Chocolate";
  let TodoDate = "2/02/25";
  return (
    <div class="container text-center">
    <div class="row">
    <div class="col-4">
      {TodoItems}
    </div>
    <div class="col-4">
      {TodoDate}
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-secondary"> Delete </button>
    </div>
    </div>
  </div>
  );
}
export default Todo1;