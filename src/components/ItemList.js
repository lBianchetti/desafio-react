import React, { useState, useEffect } from 'react'
import Item from './Item'


    function ItemList() {

        const [data, setData] = useState(null)

        useEffect(() => {
            fetchItems();
         }, []);

         async function fetchItems(){
           const res = await fetch("http://localhost:3000/db.json");
           const result = await res.json();
           setData(result.cookies)
           console.log(data);
         };


        return (
            <div className='flex flex-row flex-wrap gap-4'>
                {data && data.map(item => <div key={item.id}> <Item sabor={item.sabor} categoria={item.categoria} imgUrl={item.imgUrl} string={item.string}/> </div>)}
            </div>
        )
    }

    export default ItemList