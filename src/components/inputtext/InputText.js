import React from 'react';
import colorNames from 'colornames'

const ColorText = ({colorValue,setColorValue,setHexValue,isDarkText,setIsDarkText}) => {
    // console.log(color);
  return (
      
    
    <form onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor="addColor">Add Color</label>
      <input type="text" autoFocus  id="addColor" placeholder='Add color name' value={colorValue} onChange={(e)=>{setColorValue(e.target.value); setHexValue(colorNames(e.target.value))}} required />
      <button type='button' onClick={()=>setIsDarkText(!isDarkText)}>Toggle Text Color</button>
    </form>
    
  )
}

export default ColorText
