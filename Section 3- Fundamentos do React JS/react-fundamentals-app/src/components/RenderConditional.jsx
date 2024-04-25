const RenderConditional = ({ user }) => {
    return (
        <div>
            <h2>Conditional Rendering</h2>
            {user && <p>Welcome back, {user}!</p>}
        </div>
    )
}

export default RenderConditional