import React, { useEffect } from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  function getItem() {
    return {
      desc: "description",
      imgUrl: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
      preco: 1000
    }
  }

  
  const info = getItem()


  return (
    <>
      <ItemDetail desc={info.desc} imgUrl={info.imgUrl} preco={info.preco}/>
    </>
  )
}

export default ItemDetailContainer