import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Submit = () => {
  const loc=useLocation()
  

  
  return (
    <div>
   <div className='mt-10 ms-100 px-5 py-5  '>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-15 ms-20 text-indigo-300">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

      <h1 className='px-2 py-3 text-5xl text-pink-300'>Submited!!</h1>
    {<p>{loc.state.fn}</p>
    }{<p>{loc.state.ln}</p>}
    {<p>{loc.state.em}</p>}
 
   </div>
    </div>
  )
}

export default Submit
