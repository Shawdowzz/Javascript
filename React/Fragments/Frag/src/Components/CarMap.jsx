let Cars= () => {
  let Car = ['BMW','Audi','Toyota','Nissan'];
  return (
    <ul className="list-group">
    {Car.map((items)=>
      (<li class="list-group-item">{items}</li>

      ))}
    </ul>
  );


}
export default Cars;