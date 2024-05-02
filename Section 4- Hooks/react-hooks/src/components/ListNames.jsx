export default function ListNames({ list }) {
    // Console
    console.log("ListNames Component Created ...");
    return (
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    );
  }