import React from 'react'
import './Button.css'
import { Link } from 'react-scroll'

function Button(props) {
  return (
    <div className={props.style}>
      <Link to={props.link}
        smooth={true}
        offset={-50}
        duration={500} >{props.text}
      </Link>

    </div>
  )
}

export default Button
