import React from 'react'

function NavBar() {
    return (
        <header className='bg-[#171717] text-white p-5'>
            <nav className='container mx-auto md flex justify-between'>
                <h1 className='place-self-start font-serif text-xl'><a>Mucca Cookies</a></h1>
                <ul className='flex gap-10'>
                    <li className=''><a href="#">Tradicionais</a></li>
                    <li className=''><a href="#">Especiais</a></li>
                    <li className=''><a href="#">Recheados</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar