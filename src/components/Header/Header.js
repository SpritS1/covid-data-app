import './Header.scss'
import DateInput from './DateInput';

const Header = ({ date, setDate }) => {
 
    return ( 
        <header className='header'>
            <h1 className="header__text">COVID-19 Data</h1>
                <DateInput date={date} setDate={setDate}/>
        </header>
     );
}
 
export default Header;
