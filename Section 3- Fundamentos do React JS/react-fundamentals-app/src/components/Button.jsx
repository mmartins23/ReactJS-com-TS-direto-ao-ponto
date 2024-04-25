const Button = () => {
    const handleClick = () => {
        alert('The button was clicked!');

    }
    return (
        <div>
            <h2>Example of Passing Event to a Button</h2>
            <button onClick={handleClick}>Click to alert</button>
        </div>
    )
}
export default Button;