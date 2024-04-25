import ChildEventComponent from "./ChildEventComponent";

const ParentEventComponent = () => {
    const handleClick = () => {
        alert('The button was clicked');
    }
    return (
        <div>
            <h2>Example of Passing Function from Parent to Child to Handle a Click Event</h2>
            <ChildEventComponent handleClick={handleClick} />
        </div>
    )
}

export default ParentEventComponent