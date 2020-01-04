import React from 'react'

const Languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

const Navbar = (props) => {
  return (
    <nav className="custom-nav text-center">
      <ul className="list-inline">
        {
          Languages.map((item, index) => {
            return (
              <li className='list-inline-item' key={index}>
                <button className={`btn-clear ${props.language === item ? 'nav-active' : ''}`} onClick={() => props.onChange(item)}>{item}</button>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
export default Navbar