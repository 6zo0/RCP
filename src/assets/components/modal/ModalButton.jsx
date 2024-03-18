import {useState} from 'react';
import LoginLogo from '../header/svg/login.svg';
import './Modal.css';
import {createPortal} from 'react-dom';
import ModalContent from './ModalContent';


export default function Modal() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div>
        <button className='buttonLogin' onClick={() => setShowModal(true) }>
            <img src={LoginLogo} alt="" className='logoLogin'/>
        </button>
      </div>
      {showModal && createPortal(<ModalContent closeModal = {() => setShowModal(false)}/>, document.body)}
    </>
  )
}
