import React, { useState, useEffect } from 'react'
import Item from './Item'
import { useCartContext } from '../context/CartContext'

    function ItemList() {
        const [data, setData] = useState(null)

        useEffect(() => {
            fetchItems();
           }, []);
        
           async function fetchItems(){
             const res = await fetch("../db.json");
             const result = await res.json();
             setData(result.cookies)
           };


        return (
            <div className='flex flex-row flex-wrap gap-4' >
                {data && data.map(item => <div key={item.id}> <Item sabor={item.sabor} categoria={item.categoria} imgUrl={item.imgUrl} string={item.string}/> </div>)}
            </div>
        )
    }

    export default ItemList