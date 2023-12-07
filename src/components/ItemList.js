import React, { useState } from 'react'
import Item from './Item'


    function ItemList({ item }) {

        const cookies = [
            { id: 1, title: "M&M's", price: 0, pictureUrl: "" },
            { id: 2, title: "Gotas de Chocolate", price: 0, pictureUrl: "" },
            { id: 3, title: "Ninho", price: 0, pictureUrl: "" },
            { id: 4, title: "Limão", price: 0, pictureUrl: "" },
            { id: 5, title: "Nutella", price: 0, pictureUrl: "" },
            { id: 6, title: "Branco", price: 0, pictureUrl: "" },
            { id: 7, title: "Brigadeiro", price: 0, pictureUrl: "" }
        ];


        return (
            <ul className='flex flex-row flex-nowrap overflow-scroll max-w-full'>
                {cookies.map(item => <li key={item.id}> <Item title={item.title} /> </li>)}
            </ul>
        )
    }

    export default ItemList