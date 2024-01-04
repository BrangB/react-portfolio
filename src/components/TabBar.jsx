import React, {useState} from 'react'
import '../asset/style.css'
import { Link } from 'react-router-dom';

const TabBar = () => {
const [activeLink, setActiveLink] = useState('home');

const handleLinkClick = (linkId) => {
  setActiveLink(linkId);
};

const linkData = [
  { id: 'home', path: "/", text: 'Home', iconClass: 'fas fa-home' },
  { id: 'resume', path: "/resume", text: 'Resume', iconClass: 'fas fa-award' },
  { id: 'work', path: "/work", text: 'Work', iconClass: 'fa-solid fa-briefcase' },
  { id: 'contact', path: "/contact", text: 'Contact', iconClass: 'fa-solid fa-address-book'}
];

return (
  <nav className='hidden md:block lg:absolute lg:-top-5 z-50'>
    {linkData.map((link) => (
        
        <Link
            to={`${link.path}`}
            key={link.id}
            id={link.id}
            className={activeLink === link.id ? 'active' : ''}
            onClick={() => handleLinkClick(link.id)}
        >
            <i className={link.iconClass}></i>
            <b className='ms-2'>{link.text}</b>
        </Link>
    ))}
    <span
    className="bar"
    style={{
        left:
        activeLink === 'home'
            ? '10px'
            : activeLink === 'resume'
            ? '85px'
            : activeLink === 'work'
            ? '165px'
            : activeLink === 'contact'
            ? '245px'
            : '0px' // Default value if none of the conditions match
    }}
    ></span>

  </nav>
);
}

export default TabBar