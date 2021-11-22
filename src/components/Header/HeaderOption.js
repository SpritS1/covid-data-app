import { useState } from 'react';
import Modal from '../Modal.js';
import './HeaderOption.scss'

const HeaderOption = ({ iconId, bodyContent, modalContent}) => {
    const [isActive, setIsActive] = useState(false);

    return ( 
        <div className="header-option" onMouseDown={() => setIsActive(true)}>
            <i className={`header-option__icon ${iconId}`} />
            <div className="header-option__body">{bodyContent}</div>
            {isActive && modalContent && <Modal setIsActive={setIsActive} modalContent={modalContent}/>}
        </div>
     );
}
 
export default HeaderOption;
