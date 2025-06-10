function Apptodo(){
  return ( <div class="container text-center">
   <div class="row appRow">
    <div class="col-4">
      <input type="text" placeholder="To Do Task"/>
    </div>
    <div class="col-4">
      <input type="date"/>
    </div>
    <div class="col-2">
      <button type="button" className="btn btn-outline-primary btn-sze">Add</button>
    </div>
   </div>
  </div>
 );
}
export default Apptodo;