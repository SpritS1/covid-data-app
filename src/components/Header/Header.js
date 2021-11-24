import './Header.scss'
import HeaderOption from './HeaderOption';
import DateChange from './DateChange';
import CountryChange from './CountryChange';

const Header = ({ date, setDate, selectedCountry, setSelectedCountry, countriesData }) => {
 
    return ( 
        <header className='header'>
            <div className="header__logo">
                <h1 className="header__text">COVID-19 Data</h1>
                <i className="header__icon fas fa-viruses"></i>
            </div>
                <div className="header__options">
                    <HeaderOption 
                        iconId='far fa-flag'
                        bodyContent={selectedCountry.countryName}
                        modalContent={<CountryChange 
                            countriesData={countriesData}
                            country={selectedCountry}
                            setSelectedCountry={setSelectedCountry}
                            />
                        }
                    />
                    <HeaderOption 
                        iconId='far fa-calendar-alt' 
                        bodyContent={date}
                        modalContent={<DateChange date={date} setDate={setDate}/>}
                    />
                </div>
        </header>
     );
}
 
export default Header;
