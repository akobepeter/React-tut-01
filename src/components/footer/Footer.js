import React from 'react'

const Footer = ({length}) => {
    // const today = new Date();
  return (
    <footer>
      {/* <span> copyright&copy; K-tech  {today.getFullYear()}</span> */}
      <span>{length} List {length < 2 ? 'item':'items'} </span>
      
    </footer>
  )
}

export default Footer
