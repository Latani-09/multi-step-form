
export default function Home({handleSwitch}){
    const imageCourseAd = require('../courseAd.png');
    let noOfPeopleFilled=12
    return(
        <div className="homeContainer">
        <div className="leftContainer">
          <div className="leftTextWrapper">
              <div className="leftText" >
                <h1 >
                  <strong>Launch your Data Career in Weeks, not Years</strong>
                </h1>
                <p className="TextWrapper">
                  <span>What to expect:</span>
                  <br />
                  <span>- </span>
                  <strong>Short-answer</strong>
                  <span> questions &amp; </span>
                  <strong>No</strong>
                  <span> cover letter</span>
                  <br />
                  <span>- Takes 4 mins on average</span>
                </p>
              </div>
          <div className="StartActionWrapper">
            <div className="StartButtonWrapper">
              <button
                data-qa="start-button"
                tabIndex="0"
                className="StartButton"
                onClick={()=>handleSwitch(1)}
              >
                      Start Your Journey
              </button>
              </div>
                <div className="HelpTextWrapper">
                      press <strong>Enter ↵</strong>
                </div>

              </div>
              <div className="FillCount">
                  <p>{noOfPeopleFilled} people have filled this out</p>
              </div>
          </div>
        </div>
        <div className='rightContainer'>
          <div className="rightImage">
          <img src={imageCourseAd} width={500} height={500} alt="Course Ad" />
        </div>
        </div>
      </div>
    )

}