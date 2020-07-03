import React from 'react'
import './Main.css'
import contain from './contain.jpg'
import pic01 from './pic05.jpg'
import pic02 from './pic06.jpg'
import pic03 from './pic07.jpg'



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
            <section id={'one'} className={'wrapper' + ' ' + 'spotlight'}>
                <div className={'content'}>
                    <div className={'inner'}>
                        <h2>Magna veroeros</h2>
                        <p>
                        Praesent dapibus, neque id cursus faucibus, tortor neque ege tas augue, eu vulputate magna eros eu erat.
                         Aliquam erat et volutpat. Nam dui mi, tincidunt quis, accumsan porttitor tempus.
                        </p>
                        <ul className={'action'}>
                            <li><a className={'button'}>Learn More</a></li>
                        </ul>
                    </div>
                </div>
                <ul className={'grid-icons'}>
                    <li>
                        <div className={'inner'}>
                            <span className={'icon' + ' ' + 'solid' + ' ' + 'fa-cog' + ' ' + 'major'}></span>
                            <h3>Sed tempus</h3>
                        </div>
                    </li>
                    <li>
                        <div className={'inner'}>
                            <span className={'icon' + ' ' + 'solid' + ' ' + 'fa-desktop' + ' ' + 'major'}></span>
                            <h3>Aenean lorem</h3>
                        </div>
                    </li>
                    <li>
                        <div className={'inner'}>
                            <span className={'icon' +  ' ' + 'solid' + ' ' + 'fa-signal' + ' ' + 'major'}></span>
                            <h3>Felis aliquam</h3>
                        </div>
                    </li>
                    <li>
                        <div className={'inner'}>
                            <span className={'icon' +  ' ' + 'solid' + ' ' + 'fa-check' + ' ' + 'major'}></span>
                            <h3>Dui volutpat</h3>
                        </div>
                    </li>
                    
                </ul>
            </section>
            <section id={'two'} className={'wrapper' + ' ' + 'spotlight' + ' ' + 'style1' + ' ' + 'alt'}>
                <div className={'content'}>
                <div className={'inner'}>
                        <h2>Ipsum accumsan</h2>
                        <p>
                        Praesent dapibus, neque id cursus faucibus, tortor neque ege tas augue, eu vulputate magna eros eu erat.
                         Aliquam erat et volutpat. Nam dui mi, tincidunt quis, accumsan porttitor tempus.
                        </p>
                        <ul className={'action'}>
                            <li><a className={'button'}>Learn More</a></li>
                        </ul>
                    </div>
                </div>
                <div className={'image' + ' ' + 'n1'}>
                    <img src={contain}/>
                </div>
            </section>
            <section id={'three'} className={'wrapper' + ' ' + 'spotlight' + ' ' + 'style2'}>
                <div className={'content'}>
                <div className={'inner'}>
                        <h2>Etiam consequat</h2>
                        <p>
                        Praesent dapibus, neque id cursus faucibus, tortor neque ege tas augue, eu vulputate magna eros eu erat.
                         Aliquam erat et volutpat. Nam dui mi, tincidunt quis, accumsan porttitor tempus.
                        </p>
                        <ul className={'action'}>
                            <li><a className={'button'}>Learn More</a></li>
                        </ul>
                    </div>
                </div>
                <div className={'image' + ' ' + 'n2'}>
                    <img src={contain}/>
                </div>
            </section>
            <section id={'four'} className={'wrapper' + ' ' + 'spotlight' + ' ' + 'style3'}>
                <div className={'content'}>
                <div className={'inner'}>
                        <h2>Etiam consequat</h2>
                        <p>
                        Praesent dapibus, neque id cursus faucibus, tortor neque ege tas augue, eu vulputate magna eros eu erat.
                         Aliquam erat et volutpat. Nam dui mi, tincidunt quis, accumsan porttitor tempus.
                        </p>
                        <ul className={'action'}>
                            <li><a className={'button'}>Learn More</a></li>
                        </ul>
                    </div>
                </div>
                <div className={'image' + ' ' + 'n3'}>
                    <img src={contain}/>
                </div>
            </section>
            <section id={'five'} className={'wrapper' + ' ' + 'special'}>
                <h2>Accumsan praesent</h2>
                <p>Praesent dapibus, neque id cursus faucibus, tortor neque ege tas augue, eu vulputate magna eros eu erat.
                 Aliquam erat et volutpat. Nam dui mi, tincidunt quis, accumsan porttitor tempus lorem ipsum dolor sit amet consequat.</p>
                <ul className={'faces'}>
                    <li>
                        <span className={'images'}>
                            <img src={pic01}/>
                        </span>
                        <h3>Jane Doe</h3>
                        <p>"Aliquam erat et volutpat. Nam dui mi, tincidunt quis, porttitor magna etiam lorem tempus."</p>
                    </li>
                    <li>
                        <span className={'images'}>
                            <img src={pic02}/>
                        </span>
                        <h3>John Anderson</h3>
                        <p>"Aliquam erat et volutpat. Nam dui mi, tincidunt quis, porttitor magna etiam lorem tempus."</p>
                    </li>
                    <li>
                        <span className={'images'}>
                            <img src={pic03}/>
                        </span>
                        <h3>Kate Smith</h3>
                        <p>"Aliquam erat et volutpat. Nam dui mi, tincidunt quis, porttitor magna etiam lorem tempus."</p>
                    </li>
                </ul>
            </section>
        </div>

    )

}
export default Main


