import { useEffect, useRef } from 'react';
import './SearchBox.scss';

const SearchBox = ({ searchedValue, setSearchedValue }) => {
    const searchBoxRef = useRef();

    useEffect(() => {
        searchBoxRef.current.focus();
    }, [])

    return ( 
        <div className="search-box">
            <input 
                ref={searchBoxRef}
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