const NumberList = ({ numbers }) => {
    return (
        <div>
            <h2>Lists</h2>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </div>
    )
}

export default NumberList