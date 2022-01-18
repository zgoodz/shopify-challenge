import { useEffect, useState } from "react"
import './App.css';

function App() {
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState({
      name: '',
      quantity: 0,
      tag: ''
  })

  useEffect(() => {
    fetch('/items')
      .then(resp => resp.json())
      .then(data => setItems(data))
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/items', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
    })
      .then(response => response.json())
      .then(data => setItems(data))
  }

  function handleNewItemChange(e) {
    setNewItem({...newItem,
      [e.target.name]: e.target.value
    })
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
    <div className="App">
      <h1>Shopify Challenge</h1>
      <h2>Inventory</h2>
      <ul>
      {items.map((item) => {
        return <li key={item.id} name={item.name}>
                  Name: {item.name}, Quantity: {item.quantity}, Category: {item.tag}
                  <button>Edit</button>
                  <button name={item.name} onClick={(e) => {handleDelete(e, item.id)}}>Delete</button>
                </li>
      })}
      </ul>
      <h2>New Item</h2>
      <form onSubmit={handleSubmit}>
        <label>Item: </label>
        <input type="text" name='name' onChange={handleNewItemChange}></input>
        <label>Quantity: </label>
        <input type="text" name='quantity' onChange={handleNewItemChange}></input>
        <label>Category: </label>
        <input type="text" name='tag' onChange={handleNewItemChange}></input><br></br>
        <button>Add Item</button>
      </form>
    </div>
  );
}

export default App;
