import React from 'react'
import './Footer.css'


const Footer = () => {

    return (
        <div>
            <h2>Get in touch</h2>
            <p>Praesent dapibus, neque id cursus faucibus, tortor neque ege tas augue, eu vulputate magna eros eu erat.
            Aliquam erat et volutpat. Nam dui mi, tincidunt quis, accumsan porttitor tempus lorem ipsum dolor sit amet consequat.</p>
            <ul className={'major-icons'}>
                <li>
                    <h3 className={'icon' + ' ' + 'solid' + ' ' + 'fa-phone' + ' ' + 'major'}>
                        <span className={'label'}>Phone</span>
                    </h3>
                    <p>(000) 000-0000</p>
                </li>
                <li>
                    <h3 className={'icon' + ' ' + 'solid' + ' ' + 'fa-map' + ' ' + 'major'}>
                        <span className={'label'}>Map</span>
                    </h3>
                    <p>1234 Fictional Road
                    <br />
                    Nashville, TN 00000
                    </p>
                </li>
                <li>
                    <h3 className={'icon' + ' ' + 'solid' + ' ' + 'fa-envelope' + ' ' + 'major'}>
                        <span className={'label'}>Email</span>
                    </h3>
                    <p><a href={'#'}>info@untitled.tld</a></p>
                </li>
                
            </ul>
            <ul className={'joined-icons'}></ul>
            <p className={'copyright'}>© Untitled. All rights reserved. Lorem ipsum dolor sit amet.</p>
        </div>
    )

}
export default Footer