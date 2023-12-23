import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function ItemCount({ estoque, initial, onAdd, onRemove }) {

    
    let [count, setCount] = useState(initial)
    let [isCarrinho, setIsCarrinho] = useState(true)

    function add() {
        if (count < estoque) {
            setCount(count + 1)
        }
    }

    function sub() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    function addCarrinho() {
        onAdd(count)
        setIsCarrinho(!isCarrinho)
    }

    function remove(){
        onRemove()
        setIsCarrinho(!isCarrinho)
    }


    return (
        <>
            {isCarrinho ? (

                <div className='flex flex-col gap-2 m-auto'>
                    <div className='w-48 flex justify-between m-auto'>
                        <button onClick={sub} className='px-4 bg-slate-100 rounded-md'>-</button>
                        <span className='px-12 bg-slate-50 rounded-md'> {count} </span>
                        <button onClick={add} className='px-4 bg-slate-100 rounded-md'>+</button>
                    </div>

                    <button onClick={addCarrinho} className='px-1 w-48 bg-slate-200 rounded-md m-auto'>Adicionar ao carrinho</button>

                </div>) : (
                <div className='flex flex-col gap-2 m-auto'>
                    <button onClick={remove} className='px-1 w-48 bg-red-200 rounded-md m-auto'>Remover do carrinho</button>
                    <Link to="/carrinho" className='px-1 w-48 bg-slate-200 rounded-md m-auto text-center'>Ir ao Carrinho</Link>
                </div>
            )}
        </>
    )
}

export default ItemCount