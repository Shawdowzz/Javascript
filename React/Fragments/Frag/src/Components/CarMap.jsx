import Item from './Items.jsx'

let Cars= () => {

  //let Car = [];
  let Car = ['BMW','Audi','Toyota','Nissan','Land Rover','Jaguar'];

  return (
    <>
    <h1>Car list -1 </h1>
   
    <ul className="list-group">
       {Car.map((items)=>
          (<Item  key={items} Car={items}></Item>))}
    </ul>
    </>
  );


}
export default Cars;
