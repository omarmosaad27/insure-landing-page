import React,{useState} from 'react'
import Logo from '../images/logo.png'
import Menu from '../images/icon-hamburger.png'
import Close from '../images/icon-close.png'
const Navbar = () => {
    
    const [open, setOpen] = useState(false);
    return (
        
            <div className="navbar">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className={open ? "nav-links open" : "nav-links"}>
                    <a href="/work">How we work</a>
                    <a href="/blog">Blog</a>
                    <a href="account">Account</a>
                    <span className={open?"btn white" : "btn black"}>view plans</span>
                </div>
                <img src={open ? Close : Menu } onClick={()=>setOpen(!open)}  alt="menu" className='menu'/>
            </div>
        
    )
}

export default Navbar