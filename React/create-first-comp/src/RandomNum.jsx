function Random() {
  let number = Math.ceil(Math.random() * 20);
  return (
    <h1 style={{ backgroundColor: 'yellow', padding: '5px', color: 'white' , fontfamily: 'monospace',margin: '50px' }}>
      Your Random Number is : {number}
    </h1>
  );
}

export default Random;
