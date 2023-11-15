import React from 'react'
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
    <div className='container'>
      <div className='text-center p-5 mb-2 bg-primary-subtle text-emphasis-primary'>
      <h1>Page Not Found</h1>
        <Link to='/'>Back to Home</Link>
      </div>
      
      
    </div>
  )
}

export default Notfound
