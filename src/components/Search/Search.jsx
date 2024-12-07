import React, { useState } from 'react'
import '../Search/Search.css'
function Search({search_title , search_category , delete_all}) {

  const [value,Setvalue] = useState('')
 
  const handletitle = () => {
    search_title(value); 
  };
  const handlecategory = ()=>{
    search_category(value)
  }


  return (
    <div className='main'>
      <input type="text" placeholder='Search' onChange={(e)=> Setvalue(e.target.value)} />
      <div className='search'>
        <button onClick={handlecategory}>Search by Category</button>
        <button onClick={handletitle}>Search by Title</button>
      </div>
      <button onClick={()=>delete_all()}>Delete All</button>
    </div>
  )
}

export default Search
