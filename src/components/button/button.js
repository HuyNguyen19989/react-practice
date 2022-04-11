import React from 'react'
import style from './style.module.scss'

const Button = (props) => {
  return (
    <button
      className={`${style.modal__btn} ${props.type === 'primary'? style.modal__btn__primary: ''}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button;
