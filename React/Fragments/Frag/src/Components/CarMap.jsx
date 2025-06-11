let Cars= () => {

  //let Car = [];
  let Car = ['BMW','Audi','Toyota','Nissan'];
  if(Car.length === 0){
      return <h2>Cars not present</h2>
    }
  return (
    <>
    <h1>Car list -2 </h1>
    <ul className="list-group">
    {Car.map((items)=>
      (<li key={items} className="list-group-item">{items}</li>


      ))}
    </ul>
    </>
  );


}
export default Cars;
