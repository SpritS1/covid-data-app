import './Header.scss'

const Header = () => {
    const getCurrentDate = () => {
        let currentDate = new Date();
        currentDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
        return currentDate;
    }

    const currentDate = getCurrentDate();
 
    return ( 
        <header className='header'>
            <h1 className="header__text">COVID-19 Data</h1>
            <div className="header__date">{currentDate}</div>
        </header>
     );
}
 
export default Header;
