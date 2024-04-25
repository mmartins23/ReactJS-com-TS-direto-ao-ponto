const LoginButton = ({ loggedIn }) => {
    return (
        <div>
            <h2>Conditional Ternary</h2>
            {loggedIn ? <button>Log Out</button> : <button>Log in</button>}
        </div>
    )
}

export default LoginButton