import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
  return (
    <div className="items-center space-x-1 px-2 py-1 ring-1 ring-gray-200 hidden lg:flex">
    <BsSearch fill="gray" />
    <input
      type="text"
      placeholder="What are you looking for"
      className="px-2 py-1 flex-1  text-sm  rounded-[15px] focus:outline-none "
    />
  </div>
  )
}

export default SearchBar