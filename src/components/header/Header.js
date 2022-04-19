import React from 'react'

const Header = ({title}) => {
   

    const handleClick = () =>{
        console.log('You clicked it');
    }
    const handleClick2 = (name) =>{
        console.log(`${name} was clicked`);
    }
    const handleClick3 = (e) =>{
        console.log(e.target.innerHTML);
    }
  return (
    <div>
      <p onClick={handleClick} style={{color:'red',backgroundColor:'yellow',cursor:'pointer'}}>{title}</p>
      <button onClick={()=>handleClick2('Peter')}>Click it</button>
      <button onClick={handleClick3}>Event</button>
      
    </div>
  )
}

Header.defaultProps = {
    title:'List'
}

export default Header
