let Cars= () => {

  let Car = [];
  //let Car = ['BMW','Audi','Toyota','Nissan'];
  return (
    <>
    <h1>Car list -2 </h1>
    {Car.length === 0 ? <h1>Cars not present</h1> : null }
    
    <ul className="list-group">
    {Car.map((items)=>
      (<li key={items} className="list-group-item">{items}</li>


      ))}
    </ul>
    </>
  );


}
export default Cars;
