import React from 'react'

const Languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

const Navbar = (props) => {

  const onChangeSelect = (e) => {
    props.onChange(e.target.value)
  }

  return (
    <>
      <nav className="custom-nav text-center d-none d-md-block d-lg-none">
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
      <div className="form-group language-selector d-block d-sm-block d-md-none mt-4">
        <select onChange={onChangeSelect} className="form-control">
          {
            Languages.map((item, index) => {
              return (
                <option key={index} value={item}>{item}</option>
              )
            })
          }
        </select>
      </div>
    </>
  )
}
export default Navbar