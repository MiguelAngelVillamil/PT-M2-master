import React from 'react';
//import style from './'
import SearchBar from '../searchBar/SearchBar';
import Logo from '../../logoHenry.png'

export default function NavBar({onSearch}) {
    return(
        <nav>
            <img src={Logo} alt="LogoHenry" />
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}