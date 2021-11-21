import './SearchBox.scss';

const SearchBox = ({ searchedValue, setSearchedValue }) => {
    return ( 
        <div className="search-box">
            <input 
                type="text" 
                value={searchedValue}
                onChange={(e) => setSearchedValue(e.target.value)}
                placeholder='Search' 
                className="search-box__input" />
            <i className="fas fa-search search-box__icon "></i>
        </div>
     );
}
 
export default SearchBox;