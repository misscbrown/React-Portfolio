import React from "react";

function Navbar() {
    const [menuStatus, setMenuStatus] = React.useState(false)
    const toggleMenu = () => {
        setMenuStatus(!menuStatus)
        if (menuStatus) {
            document.body.classList.add('nav-open'); 
        } else {
            document.body.classList.remove('nav-open'); 
        }   
    } 
    const closeMenu = () => {
        document.body.classList.remove('nav-open');
        setMenuStatus(false)
}
// const navToggle = document.querySelector('.nav-toggle');
// const navLinks = document.querySelectorAll('.nav__link')

// navToggle.addEventListener('click', () => {
//     document.body.classList.toggle('nav-open');
// });

// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         document.body.classList.remove('nav-open');
//     })
// })
    return (
        <header>
            <div className="logo">
            </div>
            <button className="nav-toggle" onClick={ toggleMenu } aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home" onClick={ closeMenu } className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="#services" onClick={ closeMenu } className="nav__link">What I do</a></li>
                    <li className="nav__item"><a href="#about" onClick={ closeMenu } className="nav__link">About me</a></li>
                    <li className="nav__item"><a href="#work" onClick={ closeMenu } className="nav__link">My Work</a></li>
                </ul>
            </nav>
        </header>
    );
  }
  
  export default Navbar;