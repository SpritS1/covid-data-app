import './Header.scss'
import HeaderOption from './HeaderOption';
import DateInput from './DateInput';

const Header = ({ date, setDate }) => {
 
    return ( 
        <header className='header'>
            <h1 className="header__text">COVID-19 Data</h1>
                {/* <DateInput date={date} setDate={setDate}/> */}
                <div className="header__options">
                    <HeaderOption iconId='far fa-flag'/>
                    <HeaderOption iconId='far fa-calendar-alt'/>
                </div>
        </header>
     );
}
 
export default Header;
