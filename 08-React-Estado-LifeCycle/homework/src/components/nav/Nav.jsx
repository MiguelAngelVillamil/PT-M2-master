import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import Logo from '../../logoHenry.png'

export default function NavBar({onSearch}) {
    return(
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <span class="navbar-brand">
                    <img src={Logo} alt="LogoHenry" width="30" height="30" class="d-inline-block align-text-top"/>
                    Henry - Weather App
                </span>
                <SearchBar onSearch={onSearch}/>
            </div>
        </nav>
    )
}





