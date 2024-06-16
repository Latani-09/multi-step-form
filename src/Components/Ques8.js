import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import NavMenu from './NavMenu.js';


export default function Ques8({handleSwitch,agree,setAgree}) {
  const [error,setError]=useState(false);
  const options=[ { key: "A", statement: "I accept" },
    { key: "B", statement: "I don't accept" },
  ];

  const handleOptionClick = (key) => {
    setAgree(key);
  };
  const onNext=()=>{
    if (agree=='A'||'B'){
    handleSwitch(1);}
    else{
      setError(true)
    }
  }
  return (
    <div className="QuestionContainer">
      <div className="QuestionWrapper grid grid-rows text-left">
        <p className="Question">
          Certifying StatementThis question is required.*
        </p>
        <p className="text-[18px] ml-2">
          I hereby acknowledge that this application form was completed by me
          (the individual seeking to enroll in Metana) and I did not receive
          help from any external sources. The responses submitted are entirely
          my own and based on my own reasoning. Also, I opt in to receive
          communication messages from Metana about my application.
        </p>
        <div className="flex flex-row">
          <div className="grid grid-cols-3" role="listbox">
            {options.map((option) => (
              <div
                key={option.key}
                onClick={() => handleOptionClick(option.key)}
                role="option"
                className={`levelOption ${
                  option.key==agree
                    ? "optionSelected  border-lightPurple"
                    : "optionDefault"
                }`}
              >
                <div
                  className={`optionKeyWrapper ${
                    option.key===agree ? "bg-light-purple text-white border-2" : ""
                  }`}
                >
                  {option.key}
                </div>
                <div className="optionTextWrapper ">{option.statement}</div>
                <div className="optionMarkWrapper  ">
                  {  option.key===agree ? (
                    <CheckIcon className="h-6 w-6 text-gray-500" />
                  ) : (
                    " "
                  )}
                </div>
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
          {error?
          <div className="text-red bg-red-400">
           Oops! Please make a selection
          </div>:''
          }
        </div>
      </div>
      <NavMenu handleSwitch={handleSwitch} activeIndex={8} error={error}/>
    </div>
  );
}
