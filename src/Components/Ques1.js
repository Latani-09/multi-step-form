import { addFirstName,addLastName ,selectForm} from "../redux/formReducer";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCacheForm } from "../services/CacheService";
import NavMenu from './NavMenu.js';
export default function Ques1({handleSwitch,setFirstName,setLastName,firstname,lastname,activeIndex}){
  const dispatch = useDispatch();
  const formData = useSelector(selectForm);
const onFirstNameChange = (e) => {
  const value = e.target.value;
  setFirstName(value);
};
const onLastNameChange = (e) => {
  const value = e.target.value;
  setLastName(value);
};

const onNext = () => {
  dispatch(addFirstName(firstname));
  dispatch(addLastName(lastname));
  console.log('data redux',formData)
  setCacheForm(formData);
  handleSwitch(1);
};
    return(<>
    <div className="QuestionContainer">
        <div className="QuestionWrapper grid grid-rows text-left">

            <p className='Question'>Before we start, what is your name?</p>
            <label htmlFor='firstname' className='QuesionAttribute'>
                First Name:
            </label>
            <input id='firstname' className='QuestionValue' placeholder='Jane' onChange={e=>onFirstNameChange(e)} value={firstname}></input>
            <label htmlFor='lastname' className='QuesionAttribute'>
                Last Name:
            </label>
            <input id='lastname' type="text" className='QuestionValue' placeholder='Smith' onChange={e=>onLastNameChange(e)} value={lastname}></input>
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
        <NavMenu handleSwitch={handleSwitch}  activeIndex={1}/>

    </div>
    </>

    )
}