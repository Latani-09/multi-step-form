export const partialMatch=(word,param)=>{
    
    let j=0;
    let paramLength=param.length;
    let isMatch=false;
    for (let i=0;i<word.length;i++){
       if (word[i]==param[j]){
        j++;
       }
       if (j==paramLength){
         isMatch=true
         break
       }
    }

    
    return isMatch;

}