let Cars= () => {

  let Car = [];
  //let Car = ['BMW','Audi','Toyota','Nissan'];
  let emty = Car.length === 0 ? <h1>NO cars </h1> : null ;
  return (
    <>
    <h1>Car list -2 </h1>
    {emty}
    <ul className="list-group">
    {Car.map((items)=>
      (<li key={items} className="list-group-item">{items}</li>


      ))}
    </ul>
    </>
  );


}
export default Cars;
