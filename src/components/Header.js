import React from 'react';
import '../../src/App.css';
import LanguageSelector from './languageSelector/LanguageSelecror';

function Header() {
  return (
    <div className="header">
      
  <a href="/"><img src={`${process.env.PUBLIC_URL}/logo.png`}  className='logo' alt='logo'/></a>
    <div><LanguageSelector/></div>
    
    </div>
  );
} 

export default Header;
