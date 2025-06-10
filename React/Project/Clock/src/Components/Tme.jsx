let Tme = () => {
  let date = new Date()
  return <p className="fw-semibold">The Time :{date.toLocaleTimeString()}  Date:{date.toLocaleDateString()}</p>;
}
export default Tme;