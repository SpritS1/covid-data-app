import './Header.scss'
import HeaderOption from './HeaderOption';
import DateChange from './DateChange';

const Header = ({ date, setDate }) => {
 
    return ( 
        <header className='header'>
            <h1 className="header__text">COVID-19 Data</h1>
                <div className="header__options">
                    <HeaderOption iconId='far fa-flag'/>
                    <HeaderOption 
                        iconId='far fa-calendar-alt' 
                        modalContent={<DateChange date={date} setDate={setDate}/>}
                    />
                </div>
        </header>
     );
}
 
export default Header;
