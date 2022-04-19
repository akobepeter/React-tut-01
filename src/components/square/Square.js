import React from 'react'

const Square = ({colorValue,hexValue,isDarkText}) => {
  return (
    <section className='square' style={{background:colorValue, color: isDarkText ? '#000' : '#fff'}}>
      <p>{colorValue ? colorValue : 'Empty Value'}</p>
      <p>{hexValue? hexValue: null}</p>
      {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
    </section>
  )
}

// Square.defaultProps = {
//     colorValue:'red'
// }

export default Square
