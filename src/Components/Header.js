import React from 'react'
import download from '../Utils/resume.pdf'

const Header = () => {

    return (
      <header id="home"> 
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">Juan Pablo Monaco</h1>
            <h3>Full-stack Developer</h3>
            <hr />
            <ul className="social">
               <a href={download} className="button btn project-btn" download><i className="fa fa-download"></i>Resume</a>
               <a href="https://github.com/juanpablom" target="_blank" className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
}

export default Header;
