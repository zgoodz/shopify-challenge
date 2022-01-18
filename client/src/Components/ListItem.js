import { useState } from "react"

export default function ListItem({ item, setItems, items }) {
    const [editBtn, setEditBtn] = useState(false);
    const [editItem, setEditItem] = useState({
        name: item.name,
        quantity: item.quantity,
        tag: item.tag
    })

    function handleEditBtn() {
        setEditBtn(!editBtn)
    }

    function handleEditItemChange(e) {
        setEditItem({
            ...editItem,
            [e.target.name]: e.target.value
        })
    }

    function handleUpdateItem(e, id) {
        e.preventDefault();

        fetch(`/items/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editItem)
        })
        .then(response => response.json())
        .then(data => setEditItem(data))
        console.log(editItem)
        setEditBtn(!editBtn)
    }

    function handleDelete(e, id) {
        const name = e.target.getAttribute("name")
        setItems(items.filter(item => item.name !== name))

        fetch(`items/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json"
            }
        })
    }

    return (
        <div>
          {editBtn ?  
            <form onSubmit={(e) => handleUpdateItem(e, item.id)}>
                <label>Item: </label>
                <input type="text" name='name' value={editItem.name} onChange={handleEditItemChange}></input>
                <label>Quantity: </label>
                <input type="text" name='quantity' value={editItem.quantity} onChange={handleEditItemChange}></input>
                <label>Category: </label>
                <input type="text" name='tag' value={editItem.tag} onChange={handleEditItemChange}></input><br></br>
                <button>Update Item</button>
                <button onClick={handleEditBtn}>Cancel Edit</button>
            </form> :
            <li key={item.id} name={item.name}>
                Name: {editItem.name}, Quantity: {editItem.quantity}, Category: {editItem.tag}
                <button onClick={handleEditBtn}>Edit</button>
                <button name={item.name} onClick={(e) => { handleDelete(e, item.id) }}>Delete</button>
            </li>}
        </div>
    )
}