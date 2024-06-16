import { addCountryCode, selectForm } from "../redux/formReducer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCacheForm } from "../services/CacheService";
import DropdownList from "./Dropdown";
import NavMenu from './NavMenu.js';

export default function Ques3({
  handleSwitch,
  countries,
  setSelectedCountry,
  country,
  activeIndex
}) {
  const dispatch = useDispatch();
  const formData = useSelector(selectForm);

  const onNext = () => {
    dispatch(addCountryCode(country));
    console.log("form redu", formData);
    setCacheForm("form", formData);
    handleSwitch(1);
  };

  return (
    <>
      <div className="QuestionContainer">
        <div className="QuestionWrapper grid grid-rows text-left">
          <p className="Question">Which country you are from? 🏡🏡🏡</p>
          <DropdownList
            countries={countries}
            selectedCountry={country}
            setSelectedCountry={setSelectedCountry}
          />
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
        <NavMenu handleSwitch={handleSwitch} activeIndex={3}/>
      </div>
    </>
  );
}
