import { useState } from 'react';
import Header from './components/header/Header';
import SearchItem from './components/searchitem/SearchItem';
import AddItem from './components/additem/AddItem';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import './App.css';
import InputText from './components/inputtext/InputText';
import Square from './components/square/Square';


function App() {
  const [name,setName] = useState('Peter');
  const [count,setCount] = useState(0);

  const [items,setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));

const [newItem,setNewItem] = useState('');

const [search,setSearch] = useState('');

const [colorValue,setColorValue] = useState('');
const [hexValue,setHexValue] = useState('');

const [isDarkText,setIsDarkText] = useState(true);


const setandSaveItems = (newItems) =>{
  setItems(newItems);
  localStorage.setItem('shoppingList',JSON.stringify(newItems));
}

const addForm = (item) =>{
 const id = items.length ? items[items.length - 1].id + 1 : 1;
 const myNewItem ={id,checked:false,item};
 const listItems = [...items,myNewItem];
 setandSaveItems(listItems);
 
}

const handleCheck = (id) =>{
  const listItems = items.map(item=>item.id === id ? {...item,checked: !item.checked}:item);
  setandSaveItems(listItems);
}

const handleDelete = (id)=>{
  // console.log(`Deleted Item: ${id}`)
  const listItems = items.filter(item => item.id !== id);
  setandSaveItems(listItems);
}


const handleSubmit = (e) =>{
 e.preventDefault();
 console.log('form submitted');
//  console.log(newItem);
//call the addForm function
 addForm(newItem)
 setNewItem('')
}

  
  const handleNameChange = () =>{
    const names = ['Peter','Kunle','Samuel'];
    const int = Math.floor(Math.random()*3);
    return setName(names[int]); 
  }

  const handleClick = () =>{
    setCount(count + 1);
    console.log(count);
  }
  return (
    <div>
      Hello {name} 
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click It</button>

      <Header title= 'Groceries List'/>

      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
      
      <SearchItem search={search} setSearch={setSearch}/>
      {/* <Header/> */}
      <Content items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))} onCheck={handleCheck} onDelete={handleDelete} key={items.id}/>

      <Square colorValue={colorValue} hexValue={hexValue} isDarkText={isDarkText}/>

      <InputText colorValue={colorValue} setColorValue={setColorValue} setHexValue={setHexValue} isDarkText={isDarkText} setIsDarkText={setIsDarkText}/>
      
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
