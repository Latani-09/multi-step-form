
export default function End(){

    return(<>
    <div className="QuestionContainer">
        <div className="QuestionWrapper grid grid-rows text-left">

            <p className='Question'>Thank you For Applying!</p>
            
            <div className="ActionWrapper">
            <div className="ButtonWrapper">
              <button
                data-qa="start-button"
                tabIndex="0"
                className="Button">
                      OK
              </button>
              </div>
                <div className="HelpTextWrapper">
                      press <strong>Enter ↵</strong>
                </div>

              </div>

        </div>

    </div>
    </>

    )
}