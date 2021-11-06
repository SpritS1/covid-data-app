import './SortBy.scss';
import SortOption from './SortOption';

const SortBy = () => {
    return ( 
    <ul className="sort-by">
        <li className="sort-by__text">Sort by:</li> 
        <SortOption optionName='New cases' isActive={true}/>
        <SortOption optionName='Cases' isActive={false}/>
        <SortOption optionName='New deaths' isActive={false}/>
        <SortOption optionName='Deaths' isActive={false}/>

        {/* <li className="sort-by__option active">New cases</li>
        <li className="sort-by__option">Cases</li>
        <li className="sort-by__option">New deaths</li>
        <li className="sort-by__option">Deaths</li> */}
    </ul>
     );
}
 
export default SortBy;