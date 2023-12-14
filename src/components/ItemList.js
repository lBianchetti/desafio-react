import React, { useState } from 'react'
import Item from './Item'


    function ItemList({ item }) {

        const cookies = [
            { id: 1, title: "M&M's", category:"tradicional", price: 0, pictureUrl: "", string:"mem" },
            { id: 2, title: "Gotas de Chocolate", category:"tradicional", price: 0, pictureUrl: "",string:"gotas" },
            { id: 3, title: "Ninho", category:"recheado", price: 0, pictureUrl: "", string:"ninho" },
            { id: 4, title: "Limão", category:"especial", price: 0, pictureUrl: "", string:"limao" },
            { id: 5, title: "Nutella", category:"recheado", price: 0, pictureUrl: "", string:"nutella" },
            { id: 6, title: "Branco", category:"tradicional", price: 0, pictureUrl: "", string:"branco" },
            { id: 7, title: "Brigadeiro", category:"recheado", price: 0, pictureUrl: "", string:"brigadeiro" }
        ];


        return (
            <ul className='flex flex-row'>
                {cookies.map(item => <li key={item.id}> <Item title={item.title} category={item.category}  string={item.string}/> </li>)}
            </ul>
        )
    }

    export default ItemList