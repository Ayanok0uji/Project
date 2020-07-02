import React from 'react'
import './Main.css'



const Main = () => {

    return (
        <div>
            <header>
                <span className={'logo'}></span>
                <h1>
                    <strong>Elemental</strong> 
                    " by Pixelarity 
                </h1>
            </header>
            <section className={'banner'}>
                <h2>
                Ipsum feugiat tempus sed aliquam
                <br/>
                neque dapibus lorem volutpat
                </h2>
                <ul className={'actions' + ' ' + 'special'}>
                    <li>
                        <a href={'#'} className={'button'}>
                            <span>Learn More</span>
                        </a>
                    </li>
                </ul>
            </section>
            <section></section>
            <section></section>
        </div>
    )

}
export default Main


