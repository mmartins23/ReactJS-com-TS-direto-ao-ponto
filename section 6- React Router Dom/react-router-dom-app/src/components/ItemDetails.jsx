import { useLocation } from "react-router-dom";

const ItemDetails = () => {
  const location = useLocation();
  const { item } = location.state || {};

  return (
    <div>
      {item ? (
        <div>
          <h2>{item.title}</h2>
          <p>ID: {item.id}</p>
          <p>Description: {item.description}</p>
        </div>
      ) : (
        <p>Page not found</p>
      )}
    </div>
  );
};

export default ItemDetails;