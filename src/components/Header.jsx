import React from "react"
import Logo from "../rescources/images/logo_9341083b51.svg"

function Header(props) {

  return (
    <div className="Header">
      <img src={Logo} className="logo"></img>

      <div className="selector">
      <label for="locations">Filter by Location:</label>
      <select 
        name="location" 
        id="locations"
        onChange={props.selectLocation}
        className="drop-down"
      >
        <option value="All">All</option>
        <option value="North Carolina">North Carolina</option>
        <option value="Nicaragua">Nicaragua</option>
        <option value="Guatemala">Guatemala</option>
        <option value="Montenegro">Montenegro</option>
        <option value="Spring Break">Spring Break</option>
        <option value="Croatia">Croatia</option>
      </select>

      <label for="students">Filter by Student: </label>
      <select
      name="student" 
      id="students"
      onChange={props.selectStudent}
      className="drop-down"
      >
        <option value="All">All</option>
        <option value="Brenden">Brenden</option>
        <option value="Bryce">Bryce</option>
        <option value="Josh">Josh</option>
        <option value="Liza">Liza</option>
        <option value="Patrick">Patrick</option>
        <option value="SE">Sarah Elizabeth</option>
        <option value="Valentina">Valentina</option>
      </select>
      </div>
    </div>
  )
}

export default Header