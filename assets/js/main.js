// *** Write your code here***
(function(){
    /**Variables */
    let display = document.querySelector('.display > input');
    let btns = document.querySelectorAll(".row > input");
    //events
    window.addEventListener('DOMContentLoaded', () => {
        //debug
        console.log("Calculator loaded!");
        //click listener to all buttons
        [...btns].forEach((btn, i) => {
            btn.addEventListener('click', () => {
                console.log("clicked");

                let val = btn.value; //set button values on a variable val
               if (i !== 15){
                   if (i === 16) {
                       //target delete button
                       //some code
                       clearSingleContent()
                   }else{
                       if (i === 17) {
                           //clear button
                           deleteAllContent()
                       }else{
                        //if not one of the unique buttons then append value to display
                        //unique buttons are [equals, delete , clear]
                           appendNumber(val);
                       }
                   }
                }else{
                    //if i === 15 (target equals button)
                    compute(); //invoke compute function
                }        
    
            });
        });
    });

    /**
     * Function to clear a single value on the display
     * split values of display to form an array
     * use array pop() function to remote last element of display
     * use join() function to return the array into string again
     */
    const clearSingleContent = () => display.value.split('').pop().join('');
    
    /**
     * Method/function to clear all content of the screen/display
     */
    const deleteAllContent = () =>  display.value = '';

    /**
     * function/method to append clicked numbers on the display
     */
    const appendNumber = number => display.value += number;

    /**
     * method/function to  Compute arithmetic operation on display
     * Use eval() function to compute arithmetic represented on string
     * return the value to the display
     */
    const compute = () =>  display.value = eval(display.value); 

})();