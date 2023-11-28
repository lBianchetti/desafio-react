import React from 'react'

function NavBar() {
    return (
        <header className='bg-[#171717] text-white p-5' >
            <nav className='container mx-auto md flex justify-between'>
                <h1 className='place-self-start font-serif text-xl'><a>Mucca Cookies</a></h1>
                <ul className='flex gap-10'>
                    <li className='group'>
                        <a href="#">Tradicionais</a>
                        <nav className='invisible absolute group-hover:visible p-5 ml-[-20px] bg-[#171717] rounded-md'>
                            <ul>
                                <li><a href="#">Chocolate</a></li>
                                <li><a href="#">M&M's</a></li>
                                <li><a href="#">Branco</a></li>
                            </ul>
                        </nav>
                    </li>
                    <li className='group'>
                        <a href="#">Especiais</a>
                        <nav className='invisible absolute group-hover:visible p-5 ml-[-30px] bg-[#171717] rounded-md'>
                            <ul>
                                <li><a href="#">Limão</a></li>
                                <li><a href="#">Macadâmia</a></li>
                            </ul>
                        </nav>
                    </li>
                    <li className='group'>
                        <a href="#">Recheados</a>
                        <nav className='invisible absolute group-hover:visible p-5 ml-[-50px] bg-[#171717] rounded-md'>
                            <ul>
                                <li><a href="#">Nutella</a></li>
                                <li><a href="#">Brigadeiro</a></li>
                                <li><a href="#">Brigadeiro Branco</a></li>
                                <li><a href="#">Ninho</a></li>
                            </ul>
                        </nav>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar