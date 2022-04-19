import React from 'react'
import {FaTrashAlt} from 'react-icons/fa';

const LineItem = ({item,onCheck,onDelete}) => {
    
  return (
    <li className='item'>
    <input type="checkbox" checked={item.checked} onChange={()=>onCheck(item.id)} />
    <label htmlFor="" style={(item.checked)?{textDecoration:'line-through'}: null} onDoubleClick={()=>onCheck(item.id)}>{item.item}</label>
    <button>
        <FaTrashAlt role='button' tabIndex='0' onClick={()=>onDelete(item.id)} />
    </button>
   </li>
  )
}

export default LineItem
