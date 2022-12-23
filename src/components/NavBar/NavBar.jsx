import SearchBar from "../SearchBar/SearchBar";
import img from "../../assets/logo.png"
import { useState } from "react";


const NavBar = () => {
   
    return(
        <nav className="bg-orange h-20 relative">
            <SearchBar/>
            
            <img src={img} alt="" className="animate-bounce w-14 h-14 ml-5 absolute top-4"/>
        </nav>
    )
}

export default NavBar;