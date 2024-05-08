type GreetingProps = {
    name: string;
}

const Greeting = ({ name }: GreetingProps) => {
    return (
        <p>Good Afternoon, {name}</p>
    )
}

export default Greeting;