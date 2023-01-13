import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './LeftHeader.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTwitter, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"

export default function LeftHeader() {
return (
    <div className="colorArea w-13">
        <div className='top w-50 m-auto'>
            <h2 className='py-3'>LOGO</h2>
            <p>HOME</p> 
            <p>EXPLORE</p> 
            <p>BLOG</p> 
            <p>CONTACT</p> 
        </div>

        <div className='bottom text-center pb-3'>
            <FontAwesomeIcon icon={faInstagram} className="icon mx-1" color="white" size='lg'/>
            <FontAwesomeIcon icon={faTwitter} className="icon mx-1" color="white" size='lg'/>
            <FontAwesomeIcon icon={faFacebook} className="icon mx-1" color="white" size='lg'/>
        </div>
    </div>
)
}
