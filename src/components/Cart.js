import React, { useEffect, useState } from 'react'
import { useCartContext } from '../context/CartContext'



function Cart() {

  const { sharedState, itensNoCarrinho } = useCartContext()
  const [carrinho, setCarrinho] = useState([])
  const [sumQtd, setSumQTD] = useState(0)
  const [sumPreco, setSumPreco] = useState(0)


  const [, forceUpdate] = useState();


  useEffect(() => {
    setCarrinho(itensNoCarrinho)
    console.log(carrinho)

    setSumQTD(carrinho.reduce((acc, obj) => acc + obj.qts, 0))
    setSumPreco(carrinho.reduce((acc, obj) => acc + (obj.preco * obj.qts), 0))


  }, [itensNoCarrinho, carrinho])


  const handleDivClick = (str) => {
    const indexToDelete = itensNoCarrinho.findIndex(item => item.string === str)
    itensNoCarrinho.splice(indexToDelete, 1)
    console.log(itensNoCarrinho);
    setSumQTD(carrinho.reduce((acc, obj) => acc + obj.qts, 0))
    setSumPreco(carrinho.reduce((acc, obj) => acc + (obj.preco * obj.qts), 0))
    forceUpdate({})
  }


  return (
    <div className='container mx-auto w-[400px] flex flex-col'>
      <li className='list-none flex py-4 justify-between'>
        <span>Sabor</span>
        <span>Quantidade</span>
        <span>Preço</span>
        <div>Remover</div>
      </li>


      {(carrinho) ? (
        carrinho.map((object) => (
          <li key={object.string} className='list-none flex py-4 justify-between'>
            <span>{object.nome}</span>
            <span id='qtd'>{object.qts}</span>
            <span>{object.preco * object.qts}</span>
            <button className='cursor-pointer' onClick={() => handleDivClick(object.string)}> 🗑 </button>
          </li>
        ))

      ) : (<p>carrinho vazio</p>)}

      <hr></hr>
      <li className='list-none flex py-4 justify-between'>
        <span>Total</span>
        <span>{sumQtd}</span>
        <span>{sumPreco}</span>
        <div></div>
      </li>
    </div>
  )
}

export default Cart