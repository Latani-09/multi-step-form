import { useState } from 'react';
import { CheckIcon } from "@heroicons/react/24/outline";
import { addLevel, selectForm } from "../redux/formReducer";
import { useDispatch, useSelector } from "react-redux";
import { setCacheForm } from '../services/CacheService';
import NavMenu from './NavMenu.js';


export default function Ques6({handleSwitch,options,setLevel,level}) {

  const dispatch = useDispatch();
  const formData = useSelector(selectForm);

  const onNext = () => {
    dispatch(addLevel(level.key));
    console.log("form redu", formData);
    setCacheForm("form", formData);
    handleSwitch(1);
  };
  const handleOptionClick = (key) => {
    setLevel(options.find(option=>option.key===key))
  };

  return (
    <div className="QuestionContainer">
      <div className="QuestionWrapper grid grid-rows text-left">
        <p className="Question">
        How would you describe your current level of coding experience?
        </p>
        <div className="flex flex-row">
          <div className="grid grid-cols-3" role="listbox">
            {options.map((option) => (
              <div
                key={option.key}
                onClick={() => handleOptionClick(option.key)}
                role="option"
                className={`levelOption ${option.key==level.key ? 'optionSelected  border-lightPurple' : 'optionDefault'}`}
              >
                <div className={`optionKeyWrapper ${option.key==level.key?'bg-light-purple text-white border-2':''}`}>{option.key}</div>
                <div className='optionTextWrapper '>{option.level}</div>
                <div className='optionMarkWrapper  '>
                  {option.key==level.key?<CheckIcon className="h-6 w-6 text-gray-500" />:' '}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="ActionWrapper">
          <div className="ButtonWrapper">
            <button data-qa="start-button" tabIndex="0" className="Button" onClick={onNext}>
              OK
            </button>
          </div>

        </div>
      </div>
      <NavMenu handleSwitch={handleSwitch} activeIndex={6}/>
    </div>
  );
}
