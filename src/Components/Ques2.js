import { addEmail, selectForm } from "../redux/formReducer";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCacheForm } from "../services/CacheService";
import NavMenu from './NavMenu.js';
export default function Ques2({ handleSwitch, email, setEmail,activeIndex }) {
  const dispatch = useDispatch();
  const formData = useSelector(selectForm);

  useEffect(() => {
    if (formData.email) {
      setEmail(formData.email);
    }
  }, [formData, setEmail]);

  const onInputChange = (value) => {
    setEmail(value);
  };

  const onNext = () => {
    dispatch(addEmail(email));
    setCacheForm('form', formData);
    handleSwitch(1);
  };

  return (
    <div className="QuestionContainer">
      <div className="QuestionWrapper grid grid-rows text-left">
        <p className='Question'>What's your email address?</p>
        <p className='p-2 text-lg'>This is how we'll contact you.</p>
        <input
          id='email'
          type="text"
          className='QuestionValue'
          placeholder='example@email.com'
          onChange={e => onInputChange(e.target.value)}
          value={email}
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
      <NavMenu handleSwitch={handleSwitch} activeIndex={2}/>

    </div>
  );
}
