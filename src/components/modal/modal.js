import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import style from './style.module.scss'
import Button from '../button/button'

const Modal = (props) => {
  const [visible, setVisible] = useState()

  useEffect(() => {
    setVisible(props.visible)
  }, [props.visible])

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.visible}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div
        className={`${style.modal} ${style.micromodal__slide} ${
          props.visible ? style.is__open : style.is_close
        }`}
        aria-hidden={!visible}
      >
        <div className={style.modal__overlay} onClick={props.onClose}>
          <div
            className={style.modal__container}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={style.modal__close}
              onClick={props.onClose}
            ></button>
            <header className={style.modal__header}>
              <h2 className={style.modal__title}>{props.title}</h2>
            </header>
            <main className={style.modal__content}>{props.children}</main>
            {props.footer !== null &&
              (props.footer ? (
                <footer className={style.modal__footer}>
                  {props.footer}
                </footer>
              ) : (
                <footer className={style.modal__footer}>
                  <div>
                    <Button onClick={props.onClose}>Cancel</Button>
                    <Button type="primary" onClick={props.onClose}>
                      Confirm
                    </Button>
                  </div>
                </footer>
              ))}
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById('root'),
  )
}

export default Modal
