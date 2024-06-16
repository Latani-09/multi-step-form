import { ChevronDownIcon,ChevronUpIcon } from "@heroicons/react/24/outline";

export default function NavMenu({activeIndex,handleSwitch,error}){
    return(
    <div className="absolute bottom-10 right-20 flex flex-row  ">
            
            <div
              className={`arrowContainer bg-lightPurple mx-2 `}
              onClick={ () => handleSwitch(-1)}
            >
                <ChevronUpIcon width={30} height={30} color="white"/>
            </div>
            {activeIndex!=0?
            <div
              className={`arrowContainer bg-lightPurple mx-2`}
              onClick={ () => handleSwitch(+1)}
            >
               < ChevronDownIcon width={30} height={30} color="white"/>
            </div>:null}
          </div>
    )
};