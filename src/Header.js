import React from 'react'
import './Header.css'



const Header = () => {

    return (
        <div>
            <nav id={'nav'}>
                <ul>
                    <li className={'active'}><a href={'index.html'}>Home</a></li>
                    <li className={'oppener'}><a href={'#'}>Dropdown</a></li>
                    <li><a href={'#'}>Generic</a></li>
                    <li><a href={'#'}>Elements</a></li>
                </ul>
            </nav>
        </div>
    )

}
export default Header

