import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav>
<div className='navFirst'>
  <h2>{props.title}</h2>
  <li><a href="/">{props.about}</a></li> 
  <li><a href="/">{props.contact}</a></li>
</div>
<div className='navSec'>
  <input type="text" placeholder='Search' />
  <button>Search</button>
</div>
</nav>
    </div>
  )
}
