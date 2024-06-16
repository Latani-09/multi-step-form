import { useEffect, useState } from "react";
import { partialMatch } from "./helper";
export default function DropdownList({
  countries,
  selectedCountry,
  setSelectedCountry,
}) {
  // console.log('dropdown data received',countries)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchParam, setSearchParam] = useState("");
  const [options, setOptions] = useState(countries);
  const handleOptionClick = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };
  const handleSearchParamChange = (filter) => {
    setSearchParam(filter.toLowerCase());
  };
  useEffect(() => {
    if (searchParam) {
        setOptions(
            countries.filter((option) =>
              option.name.toLowerCase().includes(searchParam) || 
              option.code.toLowerCase().includes(searchParam) ||
              partialMatch(option.name.toLowerCase(),searchParam)
              
            ))
        setDropdownOpen(true);
    } else {
      setOptions(countries);
    }
  }, [searchParam, countries]);

  return (
    <>
      <div className="DropdownWrapper">
        <div
          className="SelectedValue"
          id="country"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-haspopup="listbox"
        >
          <input
            aria-autocomplete="list"
            value={
              selectedCountry
                ? selectedCountry.name
                : searchParam
                ? searchParam
                : ""
            }
            onChange={(e) => handleSearchParamChange(e.target.value)}
            placeholder="Type or select an option"
          />
          <button onClick={() => setDropdownOpen(!dropdownOpen)}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10l5 5 5-5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </button>
        </div>
        {dropdownOpen && (
          <ul className="DropdownList" role="listbox">
            {options.map((country) => (
              <li
                key={country.code}
                onClick={() => handleOptionClick(country)}
                role="option"
              >
                {country.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
