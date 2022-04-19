import React from 'react';
import LineItem from '../lineitem/LineItem';

const ItemList = ({items,onCheck,onDelete}) => {
  return (
    <ul>
    {items.map(item=>{
       return(
        
        <LineItem item={item} onCheck={onCheck} onDelete={onDelete} key={item.id}/>
          
       )
   })}
  </ul>
  
  )
}

export default ItemList
