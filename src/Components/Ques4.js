import { useState, useEffect } from "react";
import { addPhoneNo, selectForm } from "../redux/formReducer";
import { useDispatch, useSelector } from "react-redux";
import { setCacheForm } from "../services/CacheService";
import CountryCodeDropdown from "./CountryCodeDropdown";
import NavMenu from './NavMenu.js';

export default function Ques4({
  handleSwitch,
  setSelectedCountry,
  countries,
  country,
  phoneNo,
  setPhoneNum,
  activeIndex
}) {
  const dispatch = useDispatch();
  const formData = useSelector(selectForm);
  useEffect(() => {
    if (formData.phoneNo) {
      setPhoneNum(formData.phoneNo);
    }
    if (formData.countryCode) {
      setSelectedCountry(
        countries.find((country) => (country.code = formData.countryCode))
      );
    }
  }, [formData]);

  const onNext = () => {
    dispatch(addPhoneNo(phoneNo));
    console.log("form redu", formData);
    setCacheForm("form", formData);
    handleSwitch(1);
  };

  return (
    <>
      <div className="QuestionContainer">
        <div className="QuestionWrapper grid grid-rows text-left">
          <p className="Question">What is your phone number?</p>
          <div className="flex flex-row">
            <CountryCodeDropdown
              countries={countries}
              selectedCountry={country}
              setSelectedCountry={setSelectedCountry}
            />
            <div className="flex">
              <input
                id="phone"
                type="tel-phone"
                className="PhoneNoValue "
                placeholder="071 234 5678"
                value={phoneNo}
              ></input>
            </div>
          </div>
          <div className="ActionWrapper">
            <div className="ButtonWrapper">
              <button
                data-qa="start-button"
                tabIndex="0"
                className="Button"
                onClick={onNext}
              >
                OK
              </button>
            </div>
            <div className="HelpTextWrapper">
              press <strong>Enter ↵</strong>
            </div>
          </div>
        </div>
        <NavMenu handleSwitch={handleSwitch} activeIndex={4}/>
      </div>
    </>
  );
}
