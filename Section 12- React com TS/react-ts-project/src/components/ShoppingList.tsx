import { useState } from "react";

type Item = {
    id: number;
    name: string;
}

const ShoppingList = () => {

    const [items, setItems] = useState<Item[]>([]);
    const [newItem, setNewItem] = useState<string>("");

    const addItem = () => {
        const item: Item = {
            id: items.length + 1,
            name: newItem,
        };

        setItems([...items, item]);

        setNewItem("");
    }

    return (
        <div>
            <input type='text' value={newItem} onChange={e => setNewItem(e.target.value)} />
            <button onClick={addItem}>Add</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList