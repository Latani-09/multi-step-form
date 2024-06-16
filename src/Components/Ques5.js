import { CheckIcon } from "@heroicons/react/24/outline";
import NavMenu from './NavMenu.js';



export default function Ques5({handleSwitch,setOptions,options,activeIndex}) {

  const handleOptionClick = (key) => {
    setOptions((prevOptions) =>
      prevOptions.map((lang) =>
        lang.key === key ? { ...lang, selected: !lang.selected } : lang
      )
    );
  };
  const onNext = () => {
    handleSwitch(1);
  };
  return (
    <div className="QuestionContainer">
      <div className="QuestionWrapper grid grid-rows text-left">
        <p className="Question">
          What languages and frameworks are you familiar with?
        </p>
        <p className='text-[18px] ml-2'>Select all the languages you know.</p>
        <div className="flex flex-row">
          <div className="grid grid-cols-3" role="listbox">
            {options.map((lang) => (
              <div
                key={lang.key}
                onClick={() => handleOptionClick(lang.key)}
                role="option"
                className={`langOption ${lang.selected ? 'langSelected' : 'langDefault'}`}
              >
                <div className={`optionKeyWrapper ${lang.selected?'bg-light-purple text-white border-lightPurple':''}`}>{lang.key}</div>
                <div className='optionTextWrapper '>{lang.language}</div>
                <div className='optionMarkWrapper  '>
                  {lang.selected?<CheckIcon class="h-6 w-6 text-gray-500 py-auto" />:' '}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="ActionWrapper">
          <div className="ButtonWrapper">
            <button data-qa="start-button" tabIndex="0" className="Button"
            onClick={onNext}>
              OK
            </button>
          </div>

        </div>
      </div>
      <NavMenu handleSwitch={handleSwitch} activeIndex={5}/>
    </div>
  );
}
