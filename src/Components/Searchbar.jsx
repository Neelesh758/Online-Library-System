import React from 'react'
import { useState } from 'react'
import './general.css'
export default function ({setSearchTerm}) {
    const [inputValue, setInputValue] = useState(""); 

    const handleSearch = () => {
      setSearchTerm(inputValue);
    };
  return (
    <>
    <div className="searchHead">
        <input type="text" placeholder='Search Books Here....' onChange={(e)=> setInputValue(e.target.value.toLocaleLowerCase())} />
        <button onClick={handleSearch}>Search</button>
    </div>
    </>
  )
}
