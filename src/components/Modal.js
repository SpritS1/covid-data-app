import './Modal.scss';
import { createPortal } from "react-dom";
import { cloneElement } from 'react';

const Modal = ({ modalContent, setIsActive }) => {
    return createPortal( 
        <div className="modal">
            {modalContent && cloneElement(modalContent, {setIsActive})}
        </div>, document.getElementById('modal-root')
    );
}
 
export default Modal;