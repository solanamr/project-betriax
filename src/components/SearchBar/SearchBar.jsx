import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchCoin } from "../../redux/states/criptosSlice";
import Moon from "../../icons/moon"
import Sun from "../../icons/sun"

const SearchBar = ({setCurrentPage}) => {

    const dispatch = useDispatch()

    const [name, setName] = useState("");
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        dispatch(searchCoin());
      }, [dispatch]);

      const handleInputChange= (e)=> {
        if(e !== ""){
            dispatch(searchCoin(e));
            setCurrentPage(1);
        }
      }

      useEffect(() =>{
        if(theme === "dark"){
          document.documentElement.classList.add('dark')
        }else{
          document.documentElement.classList.remove('dark')
        }
      },[theme])

      const handlToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark")
      }

    return(
        <div className="flex justify-around ">
          <span></span>
            <input onChange={(e) => {setName(e.target.value); handleInputChange(e.target.value)}} 
            type="text" placeholder="Search coin" value={name} className="rounded mt-5 mr-5 text-center"/>
            <button onClick={handlToggle}>
              {theme === "light" ? <Moon/> : <Sun/>}
              </button>
      </div>
    )
}

export default SearchBar;