import './Header.scss'
import getDate from '../../scripts/getDate';

const Header = () => {
    const currentDate = getDate();
 
    return ( 
        <header className='header'>
            <h1 className="header__text">COVID-19 Data</h1>
            <div className="header__date">{currentDate}</div>
        </header>
     );
}
 
export default Header;
