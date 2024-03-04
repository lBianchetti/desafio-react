import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';


function ItemDetailContainer( {id}) {

  let param = useParams()
  
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetchItems();
    console.log(param.string)
   }, [param]);

   async function fetchItems(){
     const res = await fetch("../db.json");
     const result = await res.json();
     setData(result.cookies.find(cookie => cookie.string === param.string))
     console.log(data);
   };

  return (
    <div className='container mx-auto md flex'>
      {data && <ItemDetail sabor={data.sabor} categoria={data.categoria} desc={data.desc} imgUrl={data.imgUrl} string={data.string} preco={data.preco} estoque={data.estoque}/>}
    </div>
  )
}

export default ItemDetailContainer