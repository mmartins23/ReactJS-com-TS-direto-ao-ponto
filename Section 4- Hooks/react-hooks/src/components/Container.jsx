const Container = ({ children }) => {
    return (
        <div>
            <h2>Example of prop children</h2>
            <div>
                {children}
            </div>
            <hr />
        </div>
    )
}

export default Container;