import React from "react";
import twitter from '../public/assets/Twitter Icon.svg'
import github from '../public/assets/GitHub Icon.svg'
import instagram from '../public/assets/Instagram Icon.svg'
import Facebook from '../public/assets/Facebook Icon.svg'

export default function Footer(){
    return(
        <>
    <div className="footer">
        <img src={twitter} alt="" srcset="" />
        <img src={github} alt="" srcset="" />
        <img src={instagram} alt="" srcset="" />
        <img src={Facebook} alt="" />
    </div>
        </>
    )
}