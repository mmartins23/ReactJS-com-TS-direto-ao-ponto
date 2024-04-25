import './ButtonWithStyles.css';

const ButtonWithStyles = ({ onClick, children }) => {
    return (
        <>
            <h2>Styling Components</h2>
            <button className="button" onClick={onClick}>
                {children}
            </button>
        </>
    );
};

export default ButtonWithStyles