import React from 'react'

function Cartitem( {data} ) {

    const {nome, string, qts, preco} = data


  return (
    <div className='flex flex-row'>
        <h3>{nome}</h3>
        <h3>{preco}</h3>
        <h5>{qts}</h5>
        <button>🗑</button>
    </div>
  )
}

export default Cartitem