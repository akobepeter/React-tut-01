import React from 'react';
import ItemList from '../itemlist/ItemList';

const Content = ({items,onCheck,onDelete}) => {
    

    
    // const filteredItems = items.map(item=>(
    //     <ul key={item.id}>
    //        <li>{item.item}</li>
    //        <p>{item.checked}</p>
    //        <li>{item.id}</li> 
    //     </ul>
    // ))
  return (
    <main>
      {/* {filteredItems} */}
        {items.length ? (
            <ItemList items={items} onCheck={onCheck} key={items.id} onDelete={onDelete}/>
        ):(
          <h1 style={{marginTop:'2rem',color:'red'}}>Your List is empty</h1>  
        )}
    </main>
  )
}

export default Content
