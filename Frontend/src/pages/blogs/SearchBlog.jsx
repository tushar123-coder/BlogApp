import React from 'react'

function SearchBlog({search,handleSearchChange, handleSearch}) {
  
  const handleKeyPress=(event)=>{
    if(event.key==="Enter")
    {
        handleSearch()
    }
  }
    return (
    <div className='w-full flex'>
     <input type="text"
     value={search}
     onChange={handleSearchChange}
     onKeyPress={handleKeyPress}
     placeholder='Hotels with Rooftop Pool Near ...'  className='py-2 px-4 mr-5 w-full rounded-lg bg-[#f7f8f9] focus:outline-none focus:border'/>      
      <button 
      onClick={handleSearch}
      className='bg-[#1E73BE] px-4 py-2 rounded-md hover:border hover:border-gray-800 hover:bg-blue-800 text-white'>Search</button>
    </div>
  )
}

export default SearchBlog
