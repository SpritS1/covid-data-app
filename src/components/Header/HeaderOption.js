import { useState } from 'react';
import Modal from '../Modal.js';
import './HeaderOption.scss'

const HeaderOption = ({ iconId, optionBody, modalContent}) => {
    const [isActive, setIsActive] = useState(false);

    return ( 
        <div className="header-option" onMouseDown={() => setIsActive(true)}>
            <i className={`header-option__icon ${iconId}`} />
            {optionBody && optionBody}
            {isActive && modalContent && <Modal setIsActive={setIsActive} modalContent={modalContent}/>}
        </div>
     );
}
 
export default HeaderOption;
