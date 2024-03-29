import React from 'react'
import { Link } from 'react-router-dom'

import CartWidget from './CartWidget'

function NavBar() {
    return (
        <header className='bg-[#171717] text-white p-5' >
            <nav className='container mx-auto md flex justify-between items-center'>
                <h1 className='place-self-start font-serif text-xl'><Link to="/">Mucca Cookies</Link></h1>
                <ul className='flex gap-10'>
                    <li className='group'>
                        <Link to="/category/tradicional" >Tradicionais</Link>
                        <nav className='invisible absolute group-hover:visible p-5 ml-[-20px] bg-[#171717] rounded-md'>
                            <ul>
                                <li><Link to="/chocolate">Chocolate</Link></li>
                                <li><Link to="/mms">M&M's</Link></li>
                                <li><Link to="/branco">Branco</Link></li>
                            </ul>
                        </nav>
                    </li>
                    <li className='group'>
                        <Link to="/category/especial">Especiais</Link>
                        <nav className='invisible absolute group-hover:visible p-5 ml-[-30px] bg-[#171717] rounded-md'>
                            <ul>
                                <li><Link to="/limao">Limão</Link></li>
                                <li><Link to="/macadamia">Macadâmia</Link></li>
                                <li><Link to="/frutas">Frutas Vermelhas</Link></li>
                            </ul>
                        </nav>
                    </li>
                    <li className='group'>
                        <Link to="/category/recheado">Recheados</Link>
                        <nav className='invisible absolute group-hover:visible p-5 ml-[-50px] bg-[#171717] rounded-md'>
                            <ul>
                                <li><Link to="/brigadeiro">Brigadeiro</Link></li>
                                <li><Link to="/ninho">Ninho</Link></li>
                                <li><Link to="/nutella">Nutella</Link></li>
                            </ul>
                        </nav>
                    </li>
                </ul>
            
                <CartWidget />
            </nav>

            
        </header>
    )
}

export default NavBar