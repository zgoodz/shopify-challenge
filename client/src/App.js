import { useEffect, useState } from "react"
import './App.css';



function App() {
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState({
      name: '',
      quantity: 0,
      tag: ''
  })

  console.log(newItem)

  useEffect(() => {
    fetch('/items')
      .then(resp => resp.json())
      .then(data => setItems(data))
  }, [])

  function handleSubmit() {
    
  }

  function handleNewItemChange(e) {
    setNewItem({...newItem,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="App">
      <h1>Shopify Challenge</h1>
      <h2>Inventory</h2>
      <ul>
      {items.map((item) => {
        return <li>Name: {item.name}, Quantity: {item.quantity}, Category: {item.tag}</li>
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
