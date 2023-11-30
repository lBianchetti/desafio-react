import React from 'react'

function Button( { text} ) {
  return (
    <button className='block m-auto bg-slate-200 px-4 py-2 rounded-2xl'>{text}</button>
  )
}

export default Button