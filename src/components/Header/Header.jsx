import './Header.scss';
import HeaderOption from './HeaderOption';
import DateChange from './DateChange';
import CountryChange from './CountryChange';
import { useSelector } from 'react-redux';

const Header = ({ selectedCountry, setSelectedCountry, countriesData }) => {
    const date = useSelector((state) => state.date.date);

    return (
        <header className="header">
            <a className="header__logo" href="/">
                <h1 className="header__text">COVID-19 Data</h1>
                <i className="header__icon fas fa-viruses"></i>
            </a>
            <div className="header__options">
                <HeaderOption
                    iconId="far fa-flag"
                    bodyContent={selectedCountry.countryName}
                    modalContent={
                        <CountryChange
                            countriesData={countriesData}
                            country={selectedCountry}
                            setSelectedCountry={setSelectedCountry}
                        />
                    }
                />
                <HeaderOption
                    iconId="far fa-calendar-alt"
                    bodyContent={date}
                    modalContent={<DateChange />}
                />
            </div>
        </header>
    );
};

export default Header;
