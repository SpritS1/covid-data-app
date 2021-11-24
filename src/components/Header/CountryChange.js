import "./CountryChange.scss";
import SearchBox from "../SearchBox";
import { useEffect, useMemo, useState } from "react";

const CountryChange = ({
   setIsActive,
   countriesData,
   // selectedCountry,
   setSelectedCountry,
}) => {
   // Converts countriesData to array of objects with countryName and iso2
   const countriesList = useMemo(() => {
      const array = [
         {
            countryName: "Global",
            iso2: null,
         },
      ];

      countriesData.forEach((country) => {
         if (country.country && country.country_iso2s) {
            array.push({
               countryName: country.country,
               iso2: country.country_iso2s[0],
            });
         }
      });

      return array;
   }, [countriesData]);

   const [searchedCountriesList, setSearchedCountriesList] =
      useState(countriesList);
   const [searchedValue, setSearchedValue] = useState("");

   const searchCountry = (searchedValue, countriesList) => {
      const searchedList = countriesList.filter((country) => {
         if (
            country.countryName
               .toLowerCase()
               .includes(searchedValue.toLowerCase())
         ) {
            return country;
         }
         return null;
      });

      setSearchedCountriesList(searchedList);
   };

   useEffect(() => {
      searchCountry(searchedValue, countriesList);
   }, [searchedValue, countriesList]);

   const handleClick = (country) => {
      setSelectedCountry(country);
      setIsActive(false);
   };

   return (
      <div className="country-change">
         <div className="country-change__header">
            <h3 className="country-change__title">Select country</h3>
            <i
               className="fas fa-times country-change__close"
               onClick={() => setIsActive(false)}
            />
         </div>
         <SearchBox
            searchedValue={searchedValue}
            setSearchedValue={setSearchedValue}
         />
         <ul className="country-change__countries-list">
            {searchedCountriesList.map(({ countryName, iso2 }) => {
               if (iso2 || countryName === "Global") {
                  return (
                     <li
                        className="country-change__countries-list-item"
                        onClick={() => handleClick({ countryName, iso2 })}
                        key={countryName}
                     >
                        {iso2 && (
                           <img
                              className="country-change__country-flag"
                              src={`https://flagcdn.com/24x18/${iso2.toLowerCase()}.png`}
                              alt={countryName + " flag"}
                           ></img>
                        )}
                        {countryName === "Global" && (
                           <i className="fas fa-globe country-change__country-flag"></i>
                        )}
                        <span className="country-name">{countryName}</span>
                     </li>
                  );
               }
               return null;
            })}
         </ul>
      </div>
   );
};

export default CountryChange;
