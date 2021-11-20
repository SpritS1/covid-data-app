import './SearchBox.scss';

const SearchBox = () => {
    return ( 
        <div className="search-box">
            <input type="text" placeholder='Search' className="search-box__input" />
            <i className="fas fa-search search-box__icon "></i>
        </div>
     );
}
 
export default SearchBox;