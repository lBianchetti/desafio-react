import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailContainer( {id}) {
  
  const [data, setData] = useState(null)

  useEffect(() => {
      fetchItems();
   }, []);

   async function fetchItems(){
     const res = await fetch("http://localhost:3000/db.json");
     const result = await res.json();
     setData(result.cookies.find(cookie => cookie.string === window.location.pathname.slice(1)))
     console.log(data);
   };

   console.log(window.location.pathname.slice(1))

  return (
    <div className='container mx-auto md flex'>
      {data && <ItemDetail sabor={data.sabor} categoria={data.categoria} imgUrl={data.imgUrl} string={data.string} preco={data.preco}/>}
    </div>
  )
}

export default ItemDetailContainer