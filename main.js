const solution = (strText)=>{
    let text = strText.split("");
    let currentIndex = 0;
    let nonValidChar = new Set(["[","]"]);
    let pStart;
    let pEnd;

    // iterate the current indext until  you get to the end of the array
    //O(n) +
     while(currentIndex < text.length){
        if(text[currentIndex] === "("){
            // set the  pointer  to reverse the substring part
            pStart = currentIndex;
            pEnd = pStart+1;
           //move the pEnd until you find a closing parenthesis
           //O(m)
            while(text[pEnd] !==")"){
                // if you find another opening parenthesis, move pStart to it
                if(text[pEnd] === "("){
                    pStart =  pEnd;
                }
                pEnd++;
            }
            reverseInplace(text,pStart+1,pEnd-1);
            //Replace the visited parenthesis  to keep track of them
            text[pStart] = "[";
            text[pEnd] = "]";
            // only move the currentIndex if  his parentesis was replaced
            if(text[currentIndex] !== "(") currentIndex++;;

        }else{
            currentIndex++;
        }
     }
       // reduce the final array to an string and ignore the "[" and "]".
       // O(n)
     return  text.reduce((ac,char) => nonValidChar.has(char)?ac:ac+char,"");

    // reverse in place  the string
    // O(m)
    function reverseInplace(str, startIndex, endIndex){

         while(startIndex < endIndex){
            //if one of the char is not valid move to the next
            if(nonValidChar.has(str[startIndex]) 
            || nonValidChar.has(str[endIndex]) ){
             
                if(nonValidChar.has(str[startIndex]))startIndex++;
                if(nonValidChar.has(str[endIndex]))endIndex--;;

            }else{
                // change in place the orde of the chars
                let temp = str[startIndex];
                str[startIndex] = str[endIndex];
                str[endIndex] = temp;
                startIndex++;
                endIndex--;
            }
          
         }

    }

    
}


module.exports = {solution};