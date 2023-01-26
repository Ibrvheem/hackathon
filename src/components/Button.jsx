import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

function Button(props) {
  return (
    <div className={props.style} >
      <Link to={props.link}
        smooth={true}
        offset={-50}
        duration={500} 
        onClick = {props.handleClick}
        >

      {props.text}

      </Link>

    </div>
  )
}

export default Button
