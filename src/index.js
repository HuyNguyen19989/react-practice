import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import style from './style.module.scss'
import Modal from './components/modal/modal'
import Button from './components/button/button'

const App = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const footer = (
    <div className={style.footer_container}>
      <Button onClick={() => setModal1(false)}>Cancel</Button>
      <Button type='primary' onClick={() => setModal1(false)}>Confirm</Button>
    </div>
  )

  return (
    <div className={style.container}>
      <Button onClick={() => setModal1(true)}>Modal 1</Button>
      <Button onClick={() => setModal2(true)}>Modal 2</Button>
      <Button onClick={() => setModal3(true)}>Modal 3</Button>
      <Modal visible={modal1} footer={footer} title='Title 1' onClose={() => setModal1(false)}>
        <p>Contain 1</p>
      </Modal>
      <Modal visible={modal2} title='Title 2' onClose={() => setModal2(false)}>
        <p>Contain 2</p>
        <p>Contain 2</p>
      </Modal>
      <Modal visible={modal3} footer={null} title='Title 3' onClose={() => setModal3(false)}>
        <p>Contain 3</p>
        <p>Contain 3</p>
        <p>Contain 3</p>
      </Modal>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
