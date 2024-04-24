const Greeting = () => {
  const name = 'John';
  const elemento = <h2>Hello, {name}!</h2>;

  return (
    <div>
      {elemento}
      <p>Este é um parágrafo JSX.</p>
    </div>
  )
}

export default Greeting;