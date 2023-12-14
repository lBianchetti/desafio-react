import React, { useEffect } from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailContainer( {id}) {
  
 function getItem() {
    return {
      id: 1,
      desc: "description",
      imgUrl: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
      preco: 1000
    }
  }

  
  const info = getItem()


  return (
    <div className='container mx-auto md flex'>
      <ItemDetail desc={info.desc} imgUrl={info.imgUrl} preco={info.preco}/>
    </div>
  )
}

export default ItemDetailContainer