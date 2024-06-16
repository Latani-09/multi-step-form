import { addLinkedIn, selectForm } from "../redux/formReducer";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCacheForm } from "../services/CacheService";
import NavMenu from './NavMenu.js';


export default function Ques9({ handleSwitch, setlinkedIn, linkedIn ,updateForm}) {
  const dispatch = useDispatch();
  const formData = useSelector(selectForm);

  useEffect(() => {
    if (formData.linkedIn) {
      setlinkedIn(formData.linkedIn);
    }
  }, [formData]);

  const onInputChange = (value) => {
    setlinkedIn(value);
  };

  const onNext = () => {
    dispatch(addLinkedIn(linkedIn));
    setCacheForm('form', formData);
    handleSwitch(1);
  };

  return (
    <div className="QuestionContainer">
      <div className="QuestionWrapper grid grid-rows text-left">
        <p className='Question'>LinkedIn URL (optional)
</p>
        <p className='p-2 text-lg'>Here's a sniper link to make your life easy - <a href='https:\\linkedin.com/in/me' target="_blank">linkedIn.com</a> (It'll open in a new tab) 🚀
        </p>
        <input
          id='email'
          type="text"
          className='QuestionValue'
          placeholder='Type your answer here'
          onChange={e => onInputChange(e.target.value)}
          value={linkedIn}
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
      <NavMenu handleSwitch={handleSwitch} activeIndex={9}/>
    </div>
  );
}
