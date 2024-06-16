import { useState } from 'react';
import { CheckIcon } from "@heroicons/react/24/outline";
import { addSelectedRange, selectForm } from "../redux/formReducer";
import { useDispatch, useSelector } from "react-redux";
import { setCacheForm } from '../services/CacheService';
import NavMenu from './NavMenu.js';

export default function Ques7({handleSwitch,selectedRange,setSelectedRange,options}) {


   const imageStipend = require('../stipend.png');
  const handleOptionClick = (key) => {
    setSelectedRange(key);
  };
  const dispatch = useDispatch();
  const formData = useSelector(selectForm);
  const onNext = () => {
    dispatch(addSelectedRange(selectedRange));
    console.log("form redu", formData);
    setCacheForm("form", formData);
    handleSwitch(1);
  };

  return (
    <div className="QuestionwithImageContainer">
      <div className="leftQuesionWrapper grid grid-rows text-left">
        <div className='scroll'>
        <p className="Question">
        What is your current annual compensation? (Optional)
        </p>
        <p className='text-[18px] ml-2'>
        Disclaimer: The information provided regarding salary will be kept confidential and will not be used as a determining factor for acceptance into the bootcamp. It will be used exclusively for career advancement guidance.
        </p>
        <div className="flex flex-row">
        <div className="grid grid-cols-3" role="listbox">
            {options.map((option) => (
              <div
                key={option.key}
                onClick={() => handleOptionClick(option.key)}
                role="option"
                className={`levelOption ${option.key==selectedRange ? 'optionSelected  border-lightPurple' : 'optionDefault'}`}
              >
                <div className={`optionKeyWrapper ${option.key==selectedRange?'bg-light-purple text-white border-2':''}`}>{option.key}</div>
                <div className='optionTextWrapper '>{option.range}</div>
                <div className='optionMarkWrapper  '>
                  {option.key==selectedRange?<CheckIcon className="h-6 w-6 text-gray-500" />:' '}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="ActionWrapper">
          <div className="ButtonWrapper">
            <button data-qa="start-button" tabIndex="0" className="Button" onClick={()=>handleSwitch(+1)}>
              OK
            </button>
          </div>
          <div className="HelpTextWrapper">
            press <strong>Enter ↵</strong>
          </div>
        </div>
        </div>
      </div>
      <div className='rightContainer'>
          <div className="rightImage">
          <img src={imageStipend} width={500} height={500} alt="Course Ad" />
        </div>
        </div>
        <NavMenu handleSwitch={handleSwitch} activeIndex={7}/>
    </div>
  );
}
