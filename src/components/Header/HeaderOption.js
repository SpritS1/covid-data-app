import './HeaderOption.scss'

const HeaderOption = ({ iconId, optionBody}) => {
    return ( 
        <div className="header-option">
            <i className={`header-option__icon ${iconId}`} />
            {optionBody && optionBody}
        </div>
     );
}
 
export default HeaderOption;
