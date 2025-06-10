let Tme = () => {
  let date = new Date()
  return <p>The Time :{date.toLocaleTimeString()}  Date:{date.toLocaleDateString()}</p>;
}
export default Tme;